const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
    >
      {text}
    </button>
  );
};

export default Button;
