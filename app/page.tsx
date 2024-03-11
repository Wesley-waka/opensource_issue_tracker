import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'
// import HeavyComponent from './components/HeavyComponent'
import { useState } from 'react'
import dynamic from "next/dynamic";

export default async function Home() {
  const session = await getServerSession(authOptions)
  const [isVisible,setVisible] = useState(false);

  return (
      <div>
        <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
        <div>Dashboard</div>
        <Image
          src='https://bit.ly/react-cover'
          alt='coffee'
          fill
          className='object-cover'
          sizes="(max-width: 480px) 100vw,(max-width: 1200px) 50vw,33vw"
          quality={75}
          priority
        />
        <button onClick={async () => {
          const _ = (await (import ('lodash'))).default;
          const users = [
            {name: 'c'},
            {name: 'b'},
            {name: 'a'},
          ];

          const sorted = _.orderBy(users,['name']);
          console.log(sorted)
         }}></button>
      </div>
  )
}
