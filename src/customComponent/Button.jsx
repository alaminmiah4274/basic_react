const Button = ({ handleAlert, children, color = "primary", className }) => {
  const BtnColors = {
    primary: "bg-blue-500",
    success: "bg-green-500",
    danger: "bg-red-500",
    info: "bg-cyan-500",
    warning: "bg-yellow-500",
  };

  return (
    <button
      onClick={handleAlert}
      className={`${className} m-3 px-3 py-2 bg-blue-500 text-white rounded-md ${BtnColors[color]}`}
    >
      {children}
    </button>
  );
};

export default Button;
