import Header from './components/Header';
import Button from "./components/Button";
import { useState } from "react";
import Modal from "./components/Modal";
import Panel from "./components/Panel";

// モーダル参考サイト、多分ここ見たら理解しやすい
// https://imatomix.com/imatomix/notes/1591689628000


export default function Home() {
  // モーダルの状態
  const [isOpenModal, setIsOpenModal] = useState(false);

  // モーダルの開閉処理
  const toggleModal = e => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
      console.log("bbb");
    }
  };
  
  return (
    <>
      <main>  
        <div className='flex flex-col m-0'>
          <Header />
          <div className='flex justify-center px-xl'>
            <div className='container'>
              <p className='text-center mt-20 text-3xl'>AIちゃんが絵日記書いてくれます</p>
              <p className='text-center mt-10 text-3xl'>今日あった出来事を朝昼晩に分けて<br/>簡単に入力するとAIちゃんが絵日記にしてくれます！！</p>
              <Button type="button" onClick={toggleModal}>
                Open!
              </Button>
              {isOpenModal && (
                <Modal close={toggleModal}>
                  <Panel />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
