import { useEffect, useState } from "react";
import Button from "./components/Button";
import Header from './components/Header';
import Diary from "./components/Diary";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function Preview(){
  const imgSrc = "https://zinbeea369.blob.core.windows.net/diary-images/output.png"
  const articleTxt = "キストテキストテキストテトテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテトテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
  
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
  return(
    <>
      <main>  
          <div className='flex flex-col m-0 h-screen'>
            <Header></Header>
            <div>
              <div className="text-center mt-20 text-xl font-bold md:text-3xl">2023/5/5</div>
                <div className="flex justify-center">
                  <Diary src={imgSrc} >
                    {articleTxt}
                  </Diary>
                </div>
            </div>
            <div className="flex justify-center m-10">
              <Button onClick={pdhDownloadHandler}>
                ダウンロード
              </Button>
            </div>
          </div>
      </main>
    </>
  )
}
