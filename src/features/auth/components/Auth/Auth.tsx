import { axios } from '@/lib/axios';
import React from 'react';
import { useEffect } from 'react';

export const REST_API = 'ea0600db614d078c6b1ebb6048574da2';
export const REDIRECT_URL = 'http://localhost:5173/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API}&redirect_uri=${REDIRECT_URL}&response_type=code`;

export default function Auth() {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${REDIRECT_URL}
        &client_id=${REST_API}
        &redirect_uri=http://localhost:3000/oauth/callback/kakao
        &code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      )
      .then((res) => {
        console.log(res);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      });
  }, []);
  return <div>로딩 중</div>;
}
