import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { accessTokenState } from '../../Store/Member/atom';

export default function OnlyLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const navigateToHome = () => {
      navigate('/');
    };

    const navigateToSignup = () => {
      navigate('/sign-up');
    };

    if (urlParams.has('code')) {
      const code = urlParams.get('code');
      console.log('Code exists : ', code);

      axios({
        method: 'get',
        url: 'http://k8a608.p.ssafy.io:8081/api/member/login',
        params: {
          code,
        },
      }).then((res) => {
        console.log(res);
        const accessToken = res.headers.accesstoken;
        const refreshToken = res.headers.refreshtoken;
        setAccessToken(accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        const isRegist = res.data.isRegistered;
        if (isRegist) {
          navigateToHome();
        } else {
          navigateToSignup();
        }
      });
    } else {
      console.log('Code does not exist');
    }

    navigateToHome();
  }, [location, navigate, setAccessToken]);
  return <div>{/*  */}</div>;
}
