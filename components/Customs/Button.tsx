interface ButtonProps {
  label: string;
  onClick?: () => void;
  onHover?: () => void;
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
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-3 py-2 rounded-xl hover:opacity-50 transition ${
        secondary ? "bg-slate-200" : "bg-slate-300"
      } ${additionalStyle}`}
    >
      {label}
    </button>
  );
}
