import React from 'react';

interface Props {
  color: keyof typeof colorMap;
  size: keyof typeof sizeMap;
  children: React.ReactNode;
  onClick?: () => void;
}

const colorMap = {
  green: 'bg-ssafveyGreen',
  blue: 'bg-darkBlue',
  gray: 'bg-gray-400',
};

const sizeMap = {
  sm: 'w-full min-h-20 text-12 rounded-10',
  md: 'w-full min-h-40 text-16 rounded-20',
  lg: 'w-full min-h-60 text-20 rounded-30',
};

export default function RoundButton({ color, size, children, onClick }: Props) {
  const colorClass = colorMap[color];
  const sizeClass = sizeMap[size];

  return (
    <button type="button" onClick={onClick} className={`${colorClass} ${sizeClass} text-white`}>
      {children}
    </button>
  );
}

RoundButton.defaultProps = {
  onClick: () => {
    /* empty */
  },
};
