// 라벨태그에 htmlFor과 input 태그에 id로 매핑해뒀음
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import style from './SignUp.module.css';

export default function SignUp() {
  const jobList = [
    '직업1',
    '직업2',
    '직업3',
    '직업4',
    '직업5',
    '직업6',
    '직업7',
    '직업8',
    '직업9',
    '직업10',
    '직업11',
    '직업12',
    '직업13',
  ];

  const [name, setName] = useState('강신욱');
  const [email, setEmail] = useState('tlsdnrng@gmail.com');

  function inputTextHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target.id;
    const changeData = e.target.value;
    if (target === 'name') setName(changeData);
    else setEmail(changeData);
  }

  return (
    <div className={style.signUpWrapper}>
      <h1 className={style.signUpHeader}>회원가입</h1>
      <article>
        <label htmlFor="name" className={style.signUpSecondHeader}>
          이름
        </label>
        <input type="text" id="name" className={style.signUpInputTextTag} value={name} onChange={inputTextHandler} />
      </article>
      <article>
        <label htmlFor="email" className={style.signUpSecondHeader}>
          이메일
        </label>
        <input type="email" id="email" className={style.signUpInputTextTag} value={email} onChange={inputTextHandler} />
      </article>
      <section>
        <h2 className={style.signUpSecondHeader}>성별</h2>
        <article className={style.signUpGenderWrapper}>
          <article>
            <input type="checkbox" id="man" className="hidden" />
            <label htmlFor="man">남자</label>
          </article>
          <article>
            <input type="checkbox" id="woman" className="hidden" />
            <label htmlFor="woman">여자</label>
          </article>
        </article>
      </section>
      <article>
        <label htmlFor="age" className={style.signUpSecondHeader}>
          나이
        </label>
        <input type="email" id="age" className={style.signUpAgeInputBox} />
      </article>
      <h2 className={style.signUpSecondHeader}>직업</h2>
      <section className="grid grid-cols-2 gap-2">
        {jobList.map((job) => (
          <article key={job}>
            <input type="checkbox" id={job} />
            <label htmlFor={job}>{job}</label>
          </article>
        ))}
      </section>
    </div>
  );
}
