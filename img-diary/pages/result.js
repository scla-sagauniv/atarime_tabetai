import { useEffect, useState } from "react";
import Button from "./components/Button";
import Link from 'next/link';
import Header from './components/Header';
import { FetchStableDiffusion } from "@/lib/FetchStableDiffusion";
import Diary from "./components/Diary";


export default function  Home (props){
  const [imgSrc, setImgSrc] = useState('https://placehold.jp/800x450.png')
  const [articleTxt, setArticleTxt] = useState('テキストテキストテキストテキストテキストテキストテキストテキスト')

  const onClick_d = function (){
      console.log("konn")
  }

  // useEffect(() => {
  //   FetchStableDiffusion(props.query)
  //   .then((data) => {
  //     if(data){
  //       setImgSrc(data)
  //     }
  //   }
  //   )
  // })

  return(
    <>
      <Link href="/result"/>
      <div>
          <Header /> 
          <div className="">
              <div className="text-center mt-20 text-xl font-bold md:text-3xl">！！完成！！</div>
              <Diary src={imgSrc} >
                {articleTxt}
              </Diary>
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
