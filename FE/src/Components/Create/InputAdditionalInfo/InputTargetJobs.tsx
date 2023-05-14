import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedJobsState, jobOptionsSelector } from '@/Store/Create/atom';

export default function InputTargetJobs() {
  const jobOptions = useRecoilValue(jobOptionsSelector);

  const [selectedJobs, setSelectedJobs] = useRecoilState(selectedJobsState);

  useEffect(() => {
    const newSelectedJobs = jobOptions.map((option) => {
      return { ...option, checked: false };
    });

    setSelectedJobs(newSelectedJobs);
  }, [jobOptions, setSelectedJobs]);

  const handleClickCheckBox = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    setSelectedJobs((prev) => {
      const newSelectedJobs = prev.map((job) => {
        if (job.name === value) {
          return { ...job, checked: !job.checked };
        }
        return job;
      });

      return newSelectedJobs;
    });
  };

  return (
    <fieldset>
      <legend className="titleFont">대상 직업</legend>
      <div className="flex flex-wrap gap-5">
        {selectedJobs.map((job) => (
          <label htmlFor={job.name} key={job.id} className="inline-block p-5 bg-slate-300 h-34 rounded-10">
            <span className="inline-flex gap-5">
              <input type="checkbox" id={job.name} value={job.name} onClick={handleClickCheckBox} />
              <span>{job.name}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
