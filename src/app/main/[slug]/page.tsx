
import { Database } from "@/lib/database"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { cookies, headers } from "next/headers"
import Link from "next/link"
import Image from "next/image"

interface Props {
  params: string
}

export default async function OneIdea({ params }: Props) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data } = await supabase.from("ideas").select("*").eq("id", params.slug)
  console.log(typeof params)
  return (
    <>
      <div className="p-2">
        <div className="flex justify-between items-center w-full bg-zinc-900 h-12 rounded-xl text-center px-4">
          <Link href={"/main"}>
            <Image
              src="/back.svg"
              width={24}
              height={24}
              alt="Return to main"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full p-4 ">

        {/* <form className="flex flex-col flex-1 gap-4 rounded-md bg-white text-black p-4">
          <input className="bg-transparent focus:outline-none font-bold" type="text" placeholder="Title" />
          <textarea className="bg-transparent h-full focus:outline-none" placeholder="Whats on your mind?" />
        </form> */}
      </div>
    </>
  )
}

// export async function generateStaticParams() {
//   const { data: { user } } = await supabase.auth.getUser()
//   console.log("In generator")
//   const ideas = await supabase.from("ideas").select("*").eq("id", slug)
//   return ideas?.data?.map((idea) => ({
//     slug: idea.slug,
//   }));
// }