import { useState} from "react";
import Button from "./components/Button";
import Link from 'next/link';
import Header from './components/Header';



export default function  Home (){
  const [imgSrc, setImgSrc] = useState('');
  const [isOk, setIsOk] = useState(false);
  const [msg , setMsg]=useState("NowLoading...");
  const [Loadtf , setLoadtf]=useState(true);
  const [colorcss , setColorcss]=useState("bg-white");

  const onClick_d = function (){
    console.log("konn")
  }
  const test = ()=>{
    setIsOk(true);
    setLoadtf(false);
    setMsg("！！完成！！");
    setColorcss("bg-cyan-200");
  }

 
    

    return(
     <>
       <Link href="/result"/>
        <div>
            <Header /> 
            <div className="">
                <div className="text-center mt-10 text-xl font-bold md:text-3xl">{msg}</div>
                <div className="flex justify-center ">
                {isOk ? <img  className=" m-10 " src={"https://placehold.jp/400x500.png"} /> : <progress className="progress  progress-info   w-56 m-60"></progress>}
                </div>
                <div className="flex justify-center">
                <Button onClick={onClick_d} disabled={Loadtf} className={`disabled:opacity-100 px-12 md:py-4  md: mx-12 rounded border-2 border-black font-bold  text-black  shadow-md transition-all  ${colorcss} duration-1000 ease-out hover:shadow-none disabled:cursor-default text-xl md:text-2xl`}>
                    ダウンロード
                </Button>
                </div>
                <div className="flex justify-center m-5">
                <Button onClick={test} >
                    test
                </Button>
                </div>
            </div>
        </div>
     </>
  )
}

