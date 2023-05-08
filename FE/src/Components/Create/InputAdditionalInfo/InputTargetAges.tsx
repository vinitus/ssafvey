import React, { useRef, useEffect } from 'react';
// import style from './InputTargetAges.module.css';

export default function InputTargetAges() {
  const AGES_SELECTION = ['10대', '20대', '30대', '40대', '50대', '60대'];

  useEffect(() => {
    const inputs = document.querySelector('input');
  }, []);

  // const agesRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const ages = agesRef.current?.children;
  //   // console.log(ages);
  //   for (const age of ages) {
  //     console.log(age.innerText);
  //   }
  // }, []);

  return (
    <fieldset>
      <legend className="titleFont">설문 대상</legend>
      <div id="targets" className="flex flex-wrap gap-5">
        {AGES_SELECTION.map((age, idx) => (
          <label htmlFor={age} key={age} className="inline-block p-5 bg-slate-300 h-34 rounded-10">
            <span className="inline-flex gap-5">
              <input type="checkbox" id={age} value={idx + 1} />
              <span>{age}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
