import Header from './components/Header';
import Button from './components/Button';
import Link from 'next/link'

export default function Select() {
  return(
    <>
    <div>
      <Header />
      <main className='flex justify-center'>
        <div className=' px-2 container'>
          <p className='text-center mb-11 mt-32 text-xl md:text-5xl font-bold '>AIちゃんの絵日記</p>
          <div className='mx-auto my-10 flex justify-center'>
            <Link href="/input">
              <Button type="button">日記をつくる</Button>
            </Link>
            <Link href="/input">
              <Button type="button">これまでの記録</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}