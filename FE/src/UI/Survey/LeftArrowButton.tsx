import React from "react";

interface Props {
  hidden?: boolean;
}

export default function LeftArrowButton({ hidden }: Props) {
  return (
    <button type="button" className={`${hidden ? "invisible" : ""} h-60 w-60 bg-darkBlue rounded-full`}>
      &lt;
    </button>
  )
}

LeftArrowButton.defaultProps = {
  hidden: false,
}