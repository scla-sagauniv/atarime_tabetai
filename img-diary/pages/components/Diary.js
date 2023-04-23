const Diary = ({ children, ...props }) => {
  return (
    <>
      <div className="flex mt-10 mx-auto flex-col container w-96 border-solid border-2 border-black md:max-w-xl">
        <img {...props}></img>
        <div className="text-xl px-4  border-solid border-t-2 border-black font-bold h-56 vertical-rl underline underline-offset-4">{children}</div>
      </div>
    </>
    // inline pb-[1px] h-56 py-2 line-

    // <button
    //   className="px-4 py-2 rounded shadow-md border-2 border-black bg-cyan-200 text-black font-bold transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl "
    //   {...props}
    // >
    //   {children}
    // </button>
  );
};

export default Diary;