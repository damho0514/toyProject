import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const REST_API = 'ea0600db614d078c6b1ebb6048574da2';
export default function getSocialLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  useEffect(() => {
    fetch(`http://${REST_API}/users/kakao/redirect?code=${KAKAO_CODE}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        navigate('/');
      });
  }, []);
}
