import Header from './components/Header';
import Button from "./components/Button";
import { useState } from "react";
import Modal from "./components/Modal";
import Panel from "./components/Panel";

// モーダル参考サイト、多分ここ見たら理解しやすい
// https://imatomix.com/imatomix/notes/1591689628000


export default function Home() {
  const addClass = "px-6 md:py-2 py-1 mx-2 md:mx-4 rounded bg-blue-500 text-white disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl";
  // モーダルの状態
  const [isOpenModal, setIsOpenModal] = useState({
    state:false,
    kind:null,
  });

  // モーダルの開閉処理
  const toggleModal = (e,i) => {
    let idx = null;
    if (e.target === e.currentTarget) {
      switch(i){
        case 1:
          idx = i;
          console.log(1);
          break;
        case 2:
          idx = i;
          console.log(2);
          break;
        case 3:
          idx = i;
          console.log(3);
          break;
      }
      setIsOpenModal({...isOpenModal, state:!isOpenModal.state, kind: idx}); 
      console.log("bbb");
    }
  };

  return (
    <>
      <main>  
        <div className='flex flex-col m-0'>
          <Header />
          <div className='flex justify-center px-xl'>
            <div className='container px-4'>
              <p className='text-center mt-20 text-xl md:text-3xl'>AIちゃんが絵日記書いてくれます</p>
              <p className='text-center mt-10 text-xl md:text-3xl'>今日あった出来事を朝昼晩に分けて<br/>簡単に入力するとAIちゃんが絵日記にしてくれます！！</p>
              <div className='mx-auto my-10 flex justify-center'>
                <Button type="button" onClick={() => toggleModal(true,1)} className={addClass}>
                  朝
                </Button>
                <Button type="button" onClick={() => toggleModal(true,2)} className={addClass}>
                  昼
                </Button>
                <Button type="button" onClick={() => toggleModal(true,3)} className={addClass}>
                  晩
                </Button>
                {isOpenModal.state && (
                  <Modal close={toggleModal} viewKind={isOpenModal.kind} >
                    <Panel />
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
