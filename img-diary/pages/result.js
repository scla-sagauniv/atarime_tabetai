import { useEffect, useState } from "react";
import Button from "./components/Button";
import Link from 'next/link';
import Header from './components/Header';
import Diary from "./components/Diary";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function  Home (props){
  const [imgSrc, setImgSrc] = useState('https://placehold.jp/800x450.png')
  const [articleTxt, setArticleTxt] = useState('テキストテキストテキストテキストテキストテキストテキストテキスト')

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
    FetchStableDiffusion(props.query)
    .then((data) => {
      if(data){
        setImgSrc(data)
      }
    }
    )
  })

  return(
    <>
      <Link href="/result"/>
      <div>
          <Header /> 
          <div className="">
              <div className="text-center mt-20 text-xl font-bold md:text-3xl">！！完成！！</div>
              <Diary>
                {articleTxt}
              </Diary>
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
