import React from 'react';
import { useRecoilState } from 'recoil';
import { agesSelectionState } from '../../../Store/Create/atom';

export default function InputTargetAges() {
  const [agesSelection, setAgesSelection] = useRecoilState(agesSelectionState);

  const handleClickCheckBox = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    setAgesSelection((prev) => {
      const newAgesSelection = prev.map((age) => {
        if (age.name === value) {
          return { ...age, checked: !age.checked };
        }
        return age;
      });
      return newAgesSelection;
    });
  };

  return (
    <fieldset>
      <legend className="titleFont">대상 연령</legend>
      <div className="flex flex-wrap gap-5">
        {agesSelection.map((age) => (
          <label htmlFor={age.name} key={age.id} className="inline-block p-5 bg-slate-300 h-34 rounded-10">
            <span className="inline-flex gap-5">
              <input type="checkbox" id={age.name} value={age.name} onClick={handleClickCheckBox} />
              <span>{age.name}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
