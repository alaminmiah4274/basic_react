// import { useState } from "react";
import { CircleX } from "lucide-react";

const Alert = ({ color = "success", children, onClose }) => {
  // const [visible, setVisible] = useState(true);

  const alertStyles = {
    success: " bg-green-100 text-green-700 border-green-500",
    error: " bg-red-100 text-red-700 border-red-500",
    warning: " bg-yellow-100 text-yellow-700 border-yellow-500",
    info: " bg-blue-100 text-blue-700 border-blue-500",
  };

  // if (!visible) return null;

  // setVisible(true);

  return (
    <div
      className={`flex itemx-center justify-between p-4 rounded-sm ${alertStyles[color]}`}
    >
      <span>{children}</span>
      {/*<button onClick={() => onClose()}>X</button>*/}
      <button onClick={onClose}>
        <CircleX className="text-red-700 hover:text-red-400" />
      </button>
    </div>
  );
};

export default Alert;
