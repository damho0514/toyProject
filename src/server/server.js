const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.listen(5173, function () {
  console.log('liste');
});

app.get('/api/auth/kakao', async (req, res) => {
  const code = req.query.code;

  // Access token 가져오기
  try {
    const res1 = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          grant_type: 'authorization_code',
          client_id: CONFIG.KAKAO.RESTAPIKEY,
          code,
          redirect_uri:
            (CONFIG.PRODUCT ? 'https://' : 'http://') + req.headers.host + '/api/auth/kakao',
        },
      }
    );

    // Access token을 이용해 정보 가져오기
    const res2 = await axios.post(
      'https://kapi.kakao.com/v2/user/me',
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + res1.data.access_token,
        },
      }
    );
    console.log(res2.data);

    const data = res2.data;
    const row = (
      await db.query(`select * from user where snsPrimaryKey=? and snsType="kakao"`, [data.id])
    )[0];
    if (row) {
      // 회원가입된 유저
      req.session.userId = row.id;
      req.session.save(() => {});
      res.redirect('http://localhost:5173');
      return;
    }
    res.redirect(
      'http://localhost:5173/auth/signup?token=' +
        (data.properties && data.properties.nickname
          ? '&name=' + encodeURIComponent(data.properties.nickname)
          : '')
    );
  } catch (error) {
    console.log(error);
  }
});

app.post('/write', (req, res) => {
  /* code */
});
