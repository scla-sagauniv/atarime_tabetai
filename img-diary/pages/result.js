import { useEffect, useState } from "react";
import Button from "./components/Button";
import Link from 'next/link';
import Header from './components/Header';
import Diary from "./components/Diary";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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


  const pdhDownloadHandler = () => {
    const target = document.getElementById('diary');

    if (target === null) return;
    html2canvas(target, { scale: 2.5 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/svg', 1.0);
      let pdf = new jsPDF();
      pdf.addImage(imgData, 'SVG', 5, 10, canvas.width / 18, canvas.height / 18);
      pdf.save(`test.pdf`);
    });
    
  };

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
                <Button onClick={pdhDownloadHandler}>
                  ダウンロード
                </Button>
              </div>

          </div>
      </div>

    </>

  )
}
