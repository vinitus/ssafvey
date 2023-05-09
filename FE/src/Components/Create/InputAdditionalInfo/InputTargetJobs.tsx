import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { jobsSelectionState, jobsSelectionStateQuery } from '@/Store/Create/atom';

export default function InputTargetJobs() {
  const [jobsSelection, setJobsSelection] = useRecoilState(jobsSelectionState);

  const JOB_SELECTIONS = useRecoilValue(jobsSelectionStateQuery);

  useEffect(() => {
    const newJobSelection = JOB_SELECTIONS.map((selection) => {
      return { ...selection, checked: false };
    });
    setJobsSelection(newJobSelection);
  }, []);

  const handleClickCheckBox = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setJobsSelection((prev) => {
      const newJobsSelection = prev.map((job) => {
        if (job.name === value) {
          return { ...job, checked: !job.checked };
        }
        return job;
      });
      return newJobsSelection;
    });
  };

  return (
    <fieldset>
      <legend className="titleFont">대상 직업</legend>
      <div className="flex flex-wrap gap-5">
        {jobsSelection.map((job) => (
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
