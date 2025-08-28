export type ModalProps =
  | { type: "success"; message: string; onClose: () => void }
  | { type: "error"; message: string; onClose: () => void };

const Modal: React.FC<ModalProps> = ({ type, message, onClose }) => {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />
      <div
        className={`relative p-6 rounded-xl shadow-lg ${bgColor} ${textColor} max-w-sm w-full`}
      >
        <p className="text-center">{message}</p>
        <button
          className={`mt-4 px-4 py-2 rounded-full border ${textColor} border-current hover:bg-opacity-10 transition`}
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
