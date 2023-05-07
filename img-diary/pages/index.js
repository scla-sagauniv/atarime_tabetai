import Header from './components/Header';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabase';

export default function Home() {
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

// export default function Home() {
//   const supabase = createClient('https://tjqqjderebfvgebxuppx.supabase.co/auth/v1/callback', '955512649052-1b1fj1vnidgn1ldenn4g3cfv8jfsj7ac.apps.googleusercontent.com')
//   const Container = (props) => {
//     const { user } = Auth.useUser()
//     if (user)
//       return (
//         <>
//           <Typography.Text>Signed in: {user.email}</Typography.Text>
//           <Button block onClick={() => props.supabaseClient.auth.signOut()}>
//             Sign out
//           </Button>
//         </>
//       )
//     return props.children
//   }

//   return (
//     <>
//       <main>  
//         <div className='flex flex-col m-0 h-screen'>
//           <Header />
//           <div className='flex justify-center px-xl'>
//             <p className='text-center mb-20 mt-32 text-xl text-black md:text-5xl font-bold '>AIちゃんの絵日記</p>
//             <Auth.UserContextProvider supabaseClient={supabase}>
//               <Container supabaseClient={supabase}>
//                 <Auth supabaseClient={supabase}  providers={['google']}/>
//               </Container>
//             </Auth.UserContextProvider>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }
