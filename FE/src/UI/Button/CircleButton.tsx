import React from 'react';

interface Props {
  color: keyof typeof colorMap;
  size: keyof typeof sizeMap;
  hidden?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const colorMap = {
  green: 'bg-ssafveyGreen',
  blue: 'bg-darkBlue',
};

const sizeMap = {
  sm: 'min-w-30 min-h-30 text-12',
  md: 'min-w-40 min-h-40 text-16',
  lg: 'min-w-60 min-h-60 text-20',
};

export default function CircleButton({ color, size, hidden, children, onClick }: Props) {
  const colorClass = colorMap[color];
  const sizeClass = sizeMap[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${hidden ? 'invisible' : ''} ${colorClass} ${sizeClass} rounded-full text-white`}
    >
      {children}
    </button>
  );
}

CircleButton.defaultProps = {
  hidden: false,
  onClick: () => {
    /* empty */
  },
};
