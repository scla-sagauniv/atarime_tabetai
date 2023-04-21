import Header from './components/Header';
import Button from "./components/Button";
import { useState } from "react";
import Modal from "./components/Modal";
import Panel from "./components/Panel";

// モーダル参考サイト、多分ここ見たら理解しやすい
// https://imatomix.com/imatomix/notes/1591689628000


export default function Home() {

  const addClass = "px-8 md:py-4  my-10 md: mx-12 rounded border-2 border-black font-bold bg-cyan-200 text-black  shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl";
  // 入力フォームの状態
  const[allValue, setAllValue] = useState({
    morning: null,
    noon: null,
    evening: null,
  });

  // 入力フォーム保存
  const saveValue = (time, tex) => {
    setAllValue({...allValue, [time]:tex});
  }

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
        case "morning":
          idx = i;
          console.log(idx);
          break;
        case "noon":
          idx = i;
          console.log(idx);
          break;
        case "evening":
          idx = i;
          console.log(idx);
          break;
      }
      setIsOpenModal({...isOpenModal, state:!isOpenModal.state, kind: idx}); 
      console.log("セーブデータ"+allValue.morning);
    }
  };

  return (
    <>
      <main>  
        <div className='flex flex-col m-0 h-screen'>
          <Header />
          <div className='flex justify-center px-xl'>
            <div className='container px-4'>
              <p className='text-center mb-20  mt-52 text-xl md:text-5xl font-bold '>AIちゃんの絵日記</p>
              <p className='text-center my-10 text-xl md:text-3xl font-bold'>今日あった出来事を朝昼晩に分けて<br/>簡単に入力するとAIちゃんが絵日記にしてくれます！！</p>
              <div className='mx-auto my-10 flex justify-center'>
                <Button type="button" onClick={() => toggleModal(true,"morning")} className={addClass}>
                  朝
                </Button>
                <Button type="button" onClick={() => toggleModal(true,"noon")} className={addClass}>
                  昼
                </Button>
                <Button type="button" onClick={() => toggleModal(true,"evening")} className={addClass}>
                  晩
                </Button>
                {isOpenModal.state && (
                  <Modal close={toggleModal} saveValue={saveValue} viewValue={isOpenModal.kind} >
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
