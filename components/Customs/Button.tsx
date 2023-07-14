"use client";

import { useState } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  secondary?: string;
  additionalStyle?: string;
}

export default function Button({
  label,
  onClick,
  disabled,
  type = "button",
  secondary,
  additionalStyle,
}: ButtonProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      type={type}
      disabled={disabled}
      className={`px-3 py-2 rounded-xl hover:opacity-50 disabled:hover:opacity-100 disabled:bg-slate-100 disabled:text-gray-400 transition ${
        secondary ? "bg-slate-200" : "bg-slate-300"
      } ${additionalStyle}`}
    >
      {label}
    </button>
  );
}
