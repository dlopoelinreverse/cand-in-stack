interface ButtonProps {
  label: string;
  onClick?: () => void;
  onHover?: () => void;
  type?: "button" | "submit" | "reset";
  secondary?: string;
}

export default function Button({
  label,
  onClick,
  type = "button",
  secondary,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-3 py-2 rounded-xl hover:opacity-50 transition ${
        secondary ? "bg-slate-200" : "bg-slate-300"
      }`}
    >
      {label}
    </button>
  );
}
