const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 rounded shadow-md border-2 border-black bg-cyan-200 text-black font-bold transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;