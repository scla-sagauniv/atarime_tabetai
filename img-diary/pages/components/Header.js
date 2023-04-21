import Button from "./Button";
export default function Header() {
  const login = () => {
    console.log("aaa");
  }
  return (
    <>
      <div className="py-4 px-4 flex justify-between shadow-lg w-100 bg-cyan-200">
          <div className="text-3xl md:text-4xl flex items-baseline my-0">
            <a className="pt-1">絵日記</a>
          </div>
          <div className="">
            <Button onClick={login}>ログイン</Button>
          </div>
      </div>
    </>
  )
}