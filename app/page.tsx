import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  
  return (
      <div>
        <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
        <div>Dashboard</div>
      </div>
  )
}
