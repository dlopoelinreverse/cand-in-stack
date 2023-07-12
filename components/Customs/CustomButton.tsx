"use client";

interface CustomButtonProps {
  buttonType?: string;
  actionLabel: string | React.ReactElement;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  additionnalStyle?: string;
}

export default function CustomButton({
  buttonType,
  actionLabel,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
  additionnalStyle,
}: CustomButtonProps) {
  return (
    <button
      type={buttonType === "submit" ? "submit" : "button"}
      disabled={disabled}
      onClick={onClick}
      className={`
disabled:opacity-70
disabled:cursor-not-allowed
rounded-full
hover:opacity-80
transition
border-2 
${fullWidth ? "w-full" : "w-fit"}
${secondary ? "bg-blue-200" : "bg-blue-400"}
${secondary ? "border-blue-200" : "border-blue-400"}
${large ? "text-xl" : "text-md"}
${large ? "px-5" : "px-4"}
${large ? "py-3" : "py-2"}
${outline ? "bg-transparent" : ""}
${outline ? "border-blue-400" : ""}
${additionnalStyle}
`}
    >
      {actionLabel}
    </button>
  );
}
