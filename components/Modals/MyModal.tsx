import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

export default function MyModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-opacity-50 outline-none select-none focus:outline-none bg-neutral-200">
      <div className="relative w-full h-full mx-auto my-6 lg:w-3/6 lg:max-w-3xl lg:h-auto">
        <div className="relative flex flex-col w-full h-full p-6 border-0 shadow-lg outline-none rounded-xl bg-slate-100 lg:h-auto focus:outline-none">
          <button
            className="ml-auto transition border-0 rounded-full w-9 h-9 hover:opacity-70 hover:bg-slate-200"
            onClick={onClose}
          >
            X
          </button>
          <div className="flex flex-col items-center w-full p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
