// 라벨태그에 htmlFor과 input 태그에 id로 매핑해뒀음
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../Store/Member/atom';
import { getJobs, putProfile } from '../Api/member';
import style from './SignUp.module.css';

export default function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, gender } = location.state.data;

  const [age, setAge] = useState('0');
  interface Job {
    id : string,
    name : string
  }
  const [jobList, setJobList] = useState<Job[]>([]);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    async function getjoblist() {
      const list = await getJobs();
      setJobList(list.jobs)
    }
    getjoblist();
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    numberCheck(e.target.value);
  };

  const numberCheck = (e: string) => {
    const num = parseInt(e, 10) || 0;
    if (!Number.isFinite(num)) return;

    let strnum = num.toString();
    if (strnum !== '0' && !strnum.includes('.')) {
      strnum = strnum.replace(/^0/, '');
    }
    setAge(strnum);
  };

  async function putprofiledata(data : object){
    try {
      await putProfile(data, accessToken)
      navigate('/');
    }
    catch (err) {
      console.error(err)
    }   
  }

  const [selectjob, setSelectjob] = useState<string[]>([])

  const putjob = (id : string) => {
    // 값이 없으면!
    if (selectjob.indexOf(id) < 0){
      setSelectjob([...selectjob, id])
    }
    else { // 값이 있으면!
      const index = selectjob.indexOf(id)
      const tmp1 = selectjob.slice(0, index)
      const tmp2 = selectjob.slice(index+1, selectjob.length)
      setSelectjob([...tmp1, ...tmp2])
    }
  }

  const sendprofile = () => {
    const data = {
      age,
      jobs : selectjob
    };
    putprofiledata(data)
  }

  return (
    <div className={style.signUpWrapper}>
      <h1 className={style.signUpHeader}>회원가입</h1>
      <article>
        <label htmlFor="name" className={style.signUpSecondHeader}>
          이름
        </label>
        <input type="text" id="name" className={style.signUpInputTextTag} value={name} readOnly />
      </article>
      <article>
        <label htmlFor="email" className={style.signUpSecondHeader}>
          이메일
        </label>
        <input type="email" id="email" className={style.signUpInputTextTag} value={email} readOnly />
      </article>
      <section>
        <h2 className={style.signUpSecondHeader}>성별</h2>
        <article className={style.signUpGenderWrapper}>
          <article>
            {gender === 'MAN' ? (
              <input type="checkbox" checked id="man" className="hidden" disabled />
            ) : (
              <input type="checkbox" id="man" className="hidden" disabled />
            )}
            <label htmlFor="man">남자</label>
          </article>
          <article>
            {gender === 'WOMAN' ? (
              <input type="checkbox" id="woman" checked className="hidden" disabled />
            ) : (
              <input type="checkbox" id="woman" className="hidden" disabled />
            )}
            <label htmlFor="woman">여자</label>
          </article>
        </article>
      </section>
      <article>
        <label htmlFor="age" className={style.signUpSecondHeader}>
          나이
        </label>
        <input
          type="number"
          id="age"
          min="0"
          max="150"
          className={style.signUpAgeInputBox}
          value={age}
          onChange={change}
        />
      </article>
      <h2 className={style.signUpSecondHeader}>직업</h2>
      <section className="grid grid-cols-2 gap-2">
        {jobList.map((job) => (
          <article key={job.id}>
            <input type="checkbox" id={job.id} className="hidden" onClick={() => putjob(job.id) }/>
            <label htmlFor={job.id}>{job.name}</label>
          </article>
        ))}
      </section>
      <button type="button" className={style.signUpBtn} onClick={sendprofile}>
        제출 !
      </button>
    </div>
  );
}
