import { useEffect, useState } from "react";
import Button from "./components/Button";
import Link from 'next/link';
import Header from './components/Header';
import { FetchStableDiffusion } from "@/lib/FetchStableDiffusion";
import Diary from "./components/Diary";


export default function  Home (props){
  const [imgSrc, setImgSrc] = useState('https://placehold.jp/800x500.png')
  const [articleTxt, setArticleTxt] = useState('友達と公園でピクニックを楽しんだ。おいしいお弁当と飲み物を持って、芝生の上で過ごし、天気もよくて気持ちよかった。帰りに近くのカフェでケーキを食べて、一日中楽しんだ。友達との時間は本当に大切だなと思う。また次回も楽しみにしている。114文字。')

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
          <div>
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
