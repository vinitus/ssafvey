import React from "react";

interface Props {
  size: "sm" | "md" | "lg";
  onClick?: () => void;
}

const sizeMap = {
  sm: "w-40 h-40 text-20",
  md: "w-80 h-80 text-40",
  lg: "w-120 h-120 text-60",
};

export default function PlusButton({ size, onClick }: Props) {
  const sizeClass = sizeMap[size];
  
  return (
    <button type="button" onClick={onClick} className={`${sizeClass} bg-ssafveyGreen inline-block text-white rounded-full`}>
      +
    </button>
  );
}

PlusButton.defaultProps = {
  onClick: () => { console.log('no onClick function') },
};