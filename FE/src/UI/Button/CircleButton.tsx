import React from 'react';

interface Props {
  color?: 'green' | 'blue';
  hidden?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CircleButton({ color, hidden, children, onClick }: Props) {
  function colorClass() {
    if (color === 'green') {
      return 'bg-ssafveyGreen';
    }
    return 'bg-darkBlue';
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${hidden ? 'invisible' : ''} ${colorClass()} h-60 w-60  rounded-full`}
    >
      {children}
    </button>
  );
}

CircleButton.defaultProps = {
  color: 'green',
  hidden: false,
  onClick: () => {
    /* empty */
  },
};
