import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

export default function MyModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden outline-none select-none bg-opacity-40 focus:outline-none bg-neutral-300">
      <div className="relative w-full h-full mx-auto my-6 lg:w-3/6 lg:max-w-3xl lg:h-auto">
        <div className="relative flex flex-col w-full h-full border-0 shadow-lg outline-none rounded-xl bg-slate-100 lg:h-auto focus:outline-none">
          <button
            className="p-5 ml-auto transition border-0 hover:opacity-70"
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
