const Diary = ({ children, ...props }) => {
  return (
    <>
      <div className="flex mt-10 mx-auto flex-col container w-64 md:max-w-xl">
        <img {...props}></img>
        <p className="inline pb-[1px] h-56 py-2 line-">{children}</p>
      </div>
    </>
    // <button
    //   className="px-4 py-2 rounded shadow-md border-2 border-black bg-cyan-200 text-black font-bold transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl "
    //   {...props}
    // >
    //   {children}
    // </button>
  );
};

export default Diary;