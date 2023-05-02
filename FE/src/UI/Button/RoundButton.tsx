import React from 'react';

interface Props {
  color?: keyof typeof colorMap;
  size: keyof typeof sizeMap;
  children: React.ReactNode;
  onClick?: () => void;
}

const colorMap = {
  green: 'bg-ssafveyGreen',
  blue: 'bg-darkBlue',
};

const sizeMap = {
  lg: 'w-full h-60 text-20',
};

export default function RoundButton({ color = 'blue', size, children, onClick }: Props) {
  const colorClass = colorMap[color];
  const sizeClass = sizeMap[size];

  return (
    <button type="button" onClick={onClick} className={`${colorClass} ${sizeClass} rounded-30`}>
      {children}
    </button>
  );
}

RoundButton.defaultProps = {
  color: 'blue',
  onClick: () => {
    /* empty */
  },
};
