"use client";
import { AiOutlineClose } from "react-icons/ai";
import CustomButton from "../CustomButton";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement | string;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
};

export default function CustomModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}: ModalProps) {
  // const handleClose = useCallback(() => {
  //   if (disabled) return;

  //   onClose();
  // }, [disabled, onClose]);
  const handleClose = () => {
    if (disabled) return;

    onClose();
  };
  // const handleSubmit = useCallback(() => {
  //   if (disabled) return;

  //   onSubmit();
  // }, [disabled, onSubmit]);
  if (onSubmit) {
    const handleSubmit = () => {
      if (disabled) return;

      onSubmit();
    };
  }

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden outline-none select-none bg-opacity-40 focus:outline-none bg-neutral-300">
        <div className="relative w-full h-full mx-auto my-6 lg:w-3/6 lg:max-w-3xl lg:h-auto">
          {/* content */}
          <div className="relative flex flex-col w-full h-full border-0 shadow-lg outline-none rounded-xl bg-slate-100 lg:h-auto focus:outline-none">
            {/* header */}
            <div className="flex items-center justify-between p-5 rounded-t">
              {Boolean(title) && (
                <h3 className="text-3xl font-semibold">{title}</h3>
              )}
              <button
                onClick={handleClose}
                className="p-1 ml-auto transition border-0 hover:opacity-70"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* Body */}
            {Boolean(body) && (
              // relative flex-auto p-10
              <div className="flex flex-col items-center p-10">{body}</div>
            )}
            {/* Footer */}
            <div className="flex flex-col gap-2 p-10">
              {/* <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              /> */}
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
