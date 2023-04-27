import React from "react";

interface Props {
  size: "sm" | "md" | "lg";
}

export default function PlusButton({ size }: Props) {
  return (
    <button type="button" className="inline-block w-120 h-120 text-60 text-white bg-green rounded-full">
      +
    </button>
  );
}