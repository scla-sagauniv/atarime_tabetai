import Header from './components/Header';
import Button from "./components/Button";
import { useState } from "react";
import Modal from "./components/Modal";
import Panel from "./components/Panel";
import { useRouter } from "next/router";

// モーダル参考サイト、多分ここ見たら理解しやすい
// https://imatomix.com/imatomix/notes/1591689628000


export default function Home() {

  // const addClass = "px-8 md:py-4  my-10 md: mx-12 rounded border-2 border-black font-bold bg-cyan-200 text-black  shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl";
  // 入力フォームの状態
  const router = useRouter();
  const[allValue, setAllValue] = useState({
    morning: "",
    noon: "",
    evening: ""
  });

  
  const[addClassed , setAddClassed] = useState({
    morning: "px-8 md:py-4  my-10 md: mx-12 rounded border-2 border-black font-bold bg-white text-black  shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl",
    noon: "px-8 md:py-4  my-10 md: mx-12 rounded border-2 border-black font-bold bg-white text-black  shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl",
    evening: "px-8 md:py-4  my-10 md: mx-12 rounded border-2 border-black font-bold bg-white text-black  shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl",  
  });
  
  // 入力フォーム保存
  const saveValue = (time, tex) => {
    setAllValue({...allValue, [time]:tex});
    
    if(allValue[time]===""){
      console.log("nochange");
      setAddClassed({
        ...addClassed,[time]:"px-8 md:py-4  my-10 md: mx-12 rounded border-2 border-black font-bold bg-white text-black  shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl"
      });
    }else{
      console.log("change");
      setAddClassed({
        ...addClassed,[time]:"px-8 md:py-4  my-10 md: mx-12 rounded border-2 border-black font-bold text-black bg-cyan-200 shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl"
      });
    };  
  }
    
  // モーダルの状態
  const [isOpenModal, setIsOpenModal] = useState({
    state:false,
    kind:null,
    takeValue:null
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
            
            
            setIsOpenModal({...isOpenModal, state:!isOpenModal.state, kind: idx, takeValue: allValue[idx]}); 
            console.log("セーブデータ朝"+allValue.morning);
            console.log("セーブデータ昼"+allValue.noon);
            console.log("セーブデータ夜"+allValue.evening);
    }
  };
  const[tf , setTf]=useState(true);
  const [color , setColor]=useState("bg-white");
  
  const lockman = () => {
    if(allValue.morning!=="" && allValue.noon!=="" && allValue.evening!==""){
      setTf(false)
      setColor("bg-cyan-200");
    }else{
      setTf(true)
      setColor("bg-white");
    }
  }
  
  const hand_over =()=>{
    router.push({
      pathname:"/result",
      query: {"prompt":allValue.morning + "," + allValue.noon + "," + allValue.evening }
    })
    console.log("zakoga");
  }

  return (
    <>
      <main>  
        <div className='flex flex-col m-0 h-screen'>
          <Header />
          <div className='flex justify-center px-xl'>
            <div className='container px-4'>
              <p className='text-center mb-20 mt-32 text-xl md:text-5xl font-bold '>AIちゃんの絵日記</p>
              <p className='text-center my-10 text-xl md:text-3xl font-bold'>今日あった出来事を朝昼晩に分けて<br/>簡単に入力するとAIちゃんが絵日記にしてくれます！！</p>
              <div className='mx-auto my-10 flex justify-center'>
                <Button type="button" onClick={() => toggleModal(true,"morning")} className={addClassed.morning}>
                  朝
                </Button>
                <Button type="button" onClick={() => toggleModal(true,"noon")} className={addClassed.noon}>
                  昼
                </Button>
                <Button type="button" onClick={() => toggleModal(true,"evening")} className={addClassed.evening}>
                  晩
                </Button>
                {/* 参考演算子でisOpenModal.stateが真なら表示 */}
                {isOpenModal.state && (
                  <Modal close={toggleModal} saveValue={saveValue} lockman={lockman} viewValue={isOpenModal.kind} takeValue={allValue[isOpenModal.kind]}>
                    <Panel />
                  </Modal>
                )}
              </div>
              <div className='flex justify-center '>
                <Button disabled={tf} onClick={() => hand_over()} className={`disabled:opacity-100 px-12 md:py-4  md: mx-12 rounded border-2 border-black font-bold ${color} text-black  shadow-md transition-all duration-1000 ease-out hover:shadow-none disabled:cursor-default disabled:opacity-50 text-xl md:text-2xl`}>
                  作成
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
