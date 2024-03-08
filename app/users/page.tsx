import Link from 'next/link';
import React, { Suspense } from 'react';
import UserTable from './UserTable';

interface Props{
    params: {id: number};
    searchParams: {sortOrder: string};
}

const page = async({searchParams: {sortOrder}}:Props) => {
  return (
    <div>
        <h1>Users</h1>
        <Link href='/users/new' className='btn'>New User</Link>
        <Suspense fallback={<p>Loading...</p>}>
            <UserTable sortOrder={sortOrder}/>
        </Suspense>
    </div>
  )
}

export default page
