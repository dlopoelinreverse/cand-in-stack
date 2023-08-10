"use client";
// error

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
  additionalStyle?: string;
}

export default function CustomButton({
  label,
  onClick,
  disabled,
  type = "button",
  secondary,
  additionalStyle,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-3 py-2 rounded-xl hover:opacity-50 disabled:hover:opacity-100 disabled:bg-slate-100 disabled:text-gray-400 transition ${
        secondary ? "bg-slate-200" : "bg-slate-300"
      } ${disabled && "opacity-20"} ${additionalStyle}`}
    >
      {label}
    </button>
  );
}
