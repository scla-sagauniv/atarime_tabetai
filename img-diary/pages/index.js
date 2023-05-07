import Header from './components/Header';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabase';
import { useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    if (user) router.replace("/input/");
  }, [user]);


  return (
    <>
      <div>
        <Header/>
        <main className='flex justify-center'>
          <div className=' px-2 container'>
            <p className='text-center mb-11 mt-32 text-xl md:text-5xl font-bold '>AIちゃんの絵日記</p>
            <p className='text-center mb-10 text-xl md:text-3xl text-slate-600'>ログインしてね</p>
            <div className=' max-w-4xl my-0 mx-auto'>
              <Auth
                supabaseClient={supabase}
                appearance={{ 
                  theme: ThemeSupa
                }}
                providers={['google']}
              />
            </div>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    </>
  )
}

// const Home = () => {
  //   const user = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (user) router.replace("./input");
//   }, [user]);

//   return (
//     <>
//       <div>
//         <Header/>
//         <main className='flex justify-center'>
//           <div className=' px-2 container'>
//             <p className='text-center mb-11 mt-32 text-xl md:text-5xl font-bold '>AIちゃんの絵日記</p>
//             <p className='text-center mb-10 text-xl md:text-3xl text-slate-600'>ログインしてね</p>
//             <div className=' max-w-4xl my-0 mx-auto'>
//               <Auth
//                 supabaseClient={supabase}
//                 appearance={{ 
//                   theme: ThemeSupa
//                 }}
//                 providers={['google']}
//               />
//             </div>
//           </div>
//         </main>
//         <footer>
//         </footer>
//       </div>
//     </>
//   );
// };

// export const getServerSideProps = async (ctx) => {
//   const supabase = createServerSupabaseClient(ctx);
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();
//   if (session)
//     return {
//       redirect: {
//         destination: "./input",
//         permanent: false,
//       },
//     };
//   return {
//     props: {},
//   };
// };

// export default Home;

