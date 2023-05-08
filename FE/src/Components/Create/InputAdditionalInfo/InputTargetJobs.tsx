import React from 'react';

export default function InputTargetJobs() {
  const targets = ['무관', '교육생', '컨설턴트', '프로', '코치', '기타'];

  return (
    <fieldset>
      <legend className="titleFont">설문 대상</legend>
      <div id="targets" className="flex flex-wrap gap-5">
        {targets.map((target) => (
          <label htmlFor={target} key={target} className="inline-block p-5 bg-slate-300 h-34 rounded-10">
            <span className="inline-flex gap-5">
              <input type="checkbox" id={target} value={target} />
              <span>{target}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
