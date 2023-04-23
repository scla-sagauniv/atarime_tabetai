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
  const [isOk, setIsOk] = useState(false)
  const router = useRouter();


  const onClick_d = function (){
      console.log("konn")
  }

  useEffect(() => {
    FetchChatgpt(router.query.prompt)
    .then((data) => {
      if(data.reply){
        setArticleTxt(data.reply)
        setIsOk(true)
      }
    }
    ).catch((err) => console.log("error",err))
  })
  
  // setTimeout(setImgSrc("https://zinbeea369.blob.core.windows.net/diary-images/output.png"),10000
  // )

  return(
    <>
      <Link href="/result"/>
      <div>
          <Header /> 
          <div>
            <div className="text-center mt-20 text-xl font-bold md:text-3xl">！！完成！！</div>
            
              <div className="flex justify-center m-10">
                {isOk?  <Diary src={imgSrc} >
                {articleTxt}
              </Diary>: <progress className="progress w-56"></progress>}
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
