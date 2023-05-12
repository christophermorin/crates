import { redirect } from 'next/navigation';
import Login from "./Login";

export default async function Home() {
  const session = !true
  if (session) {
    redirect('/main')
  }
  return (
    <main className="flex flex-col flex-1">
      <h1 className="text-2xl text-center">Brain Box</h1>
      {!session && <Login />}
    </main >
  )
}
