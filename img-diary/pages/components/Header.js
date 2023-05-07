import Button from "./Button";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";


export default function Header() {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const login = () => {
    console.log("aaa");
  }
  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);
  return (
    <>
      <div className="py-4 px-4 flex justify-between shadow-lg w-100 bg-cyan-200">
          <div className="text-3xl md:text-4xl flex items-baseline my-0">
            <a className="text-black pt-1">絵日記</a>
          </div>
          <div className="flex">
            <p className="text-xl md:text-2xl text-black pt-1 mr-3">{user?.email}</p>
            <Button onClick={async () => {
              await supabaseClient.auth.signOut();
            }}>ログアウト</Button>
          </div>
      </div>
    </>
  )
}