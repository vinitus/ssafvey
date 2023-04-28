import React from "react";

interface Props {
  hidden?: boolean;
  children: React.ReactNode;
}

export default function RoundButton({ hidden, children }: Props) {
  return (
    <button type="button" className={`${hidden ? "invisible" : ""} h-60 w-60 bg-darkBlue rounded-full`}>
      {children}
    </button>
  )
}

RoundButton.defaultProps = {
  hidden: false,
}