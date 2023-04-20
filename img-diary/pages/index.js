import Header from './components/Header';


export default function Home() {
  return (
    <>
      <main>  
        <div className='flex flex-col m-0'>
          <Header />
          <div className='flex justify-center px-xl'>
            <div className='container'>
              <p className='text-center mt-20 text-3xl'>AIちゃんが絵日記書いてくれます</p>
              <p className='text-center mt-10 text-3xl'>今日あった出来事を朝昼晩に分けて<br/>簡単に入力するとAIちゃんが絵日記にしてくれます！！</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
