import React, { useEffect, useState } from "react";

export type ModalProps =
  | { type: "success"; message: string; onClose: () => void }
  | { type: "error"; message: string; onClose: () => void };

const Modal: React.FC<ModalProps> = ({ type, message, onClose }) => {
  const [show, setShow] = useState(false);

  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // délai pour l'animation
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          show ? "opacity-30" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal Box */}
      <div
        className={`relative p-6 rounded-xl shadow-lg max-w-sm w-full transform transition-all duration-300 ${
          show ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } ${bgColor} ${textColor}`}
      >
        <p className="text-center text-lg font-semibold">{message}</p>
        <button
          className={`mt-4 px-4 py-2 rounded-full border ${textColor} border-current hover:bg-opacity-20 hover:scale-105 transition-all duration-200`}
          onClick={handleClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
