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

    const navigateToSignup = (data: object) => {
      navigate('/sign-up', { state: { data } });
    };

    if (urlParams.has('code')) {
      const code = urlParams.get('code');
      console.log('Code exists : ', code);

      axios({
        method: 'get',
        // url: 'http://localhost:8081/api/member/login',
        url: 'http://k8a608.p.ssafy.io:8081/api/member/login',
        params: {
          code,
        },
      }).then((res) => {
        console.log(res);
        const accessToken = res.data?.token.Authorization;
        const {refreshToken} = res.data.token;
        setAccessToken(accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        const isRegist = res.data.isRegistered;
        if (isRegist) {
          navigateToHome();
        } else {
          const data = {
            name: res.data.name,
            email: res.data.email,
            gender: res.data.genderType,
          };
          navigateToSignup(data);
        }
      });
    } else {
      console.log('Code does not exist');
    }

    navigateToHome();
  }, [location, navigate, setAccessToken]);
  return <div>{/*  */}</div>;
}
