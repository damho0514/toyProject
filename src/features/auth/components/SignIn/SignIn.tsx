import { Button } from 'antd';
import { AuthBlock } from '../AuthBlock';

const REST_API_KEY = 'ea0600db614d078c6b1ebb6048574da2';
const REDIRECT_URI = 'http://localhost:5173/oauth/callback/kakao';
const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function SignIn() {
  const onLogin = () => {
    window.location.href = link;
  };
  return (
    <AuthBlock>
      <Button onClick={onLogin}>카카오 로그인</Button>
    </AuthBlock>
  );
}
