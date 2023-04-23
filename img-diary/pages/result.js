import { useEffect, useState } from "react";
import Button from "./components/Button";
import Link from 'next/link';
import Header from './components/Header';
import Diary from "./components/Diary";
import { FetchChatgpt } from "@/lib/FetchChatgpt";
import { useRouter } from 'next/router';


export default function  Home (props){
  const [imgSrc, setImgSrc] = useState('https://zinbeea369.blob.core.windows.net/diary-images/output.png')
  const [articleTxt, setArticleTxt] = useState('テキストテキストテキストテキストテキストテキストテキストテキスト')
  const router = useRouter();

  const onClick_d = function (){
      console.log("konn")
  }

  useEffect(() => {
    FetchChatgpt(router.query.prompt)
    .then((data) => {
      if(data.reply){
        setArticleTxt(data.reply)
      }
    }
    ).catch((err) => console.log("error",err))
  })

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
