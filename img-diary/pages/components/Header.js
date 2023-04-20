import Button from "./Button";
export default function Header() {
  const login = () => {
    console.log("aaa");
  }
  return (
    <>
      <div className="py-4 px-4 flex justify-between shadow-lg w-100">
          <div>
            <a className=" text-4xl">絵日記</a>
          </div>
          <div className="">
            <Button onClick={login}>ログイン</Button>
          </div>
      </div>
    </>
  )
}