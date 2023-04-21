import { useState } from "react";
import Button from "./components/Button";
import Link from 'next/link';
import Header from './components/Header';



export default function  Home (){
    const onClick_d = function (){
        console.log("konn")
    }
    

    return(
     <>
       <Link href="/result"/>
        <div>
            <Header /> 
            <div className="">
                <div className="text-center mt-20 text-xl font-bold md:text-3xl">！！完成！！</div>
                <div className="flex justify-center m-10">
                <img  src="https://placehold.jp/800x450.png" classname=""></img>
                </div>
                <div className="flex justify-center m-10">
                  
                  <Button onClick={onClick_d}>
                    ダウンロード
                  </Button>
                  
                </div>

            </div>
        </div>

     </>

    )
}
