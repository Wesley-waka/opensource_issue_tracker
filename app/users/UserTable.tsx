import React from 'react'
import { sort } from 'fast-sort';

interface User{
    id: number;
    name: string;
}

interface Props{
    sortOrder: string;
}

const UserTable = async({sortOrder}: Props) => {
    const res  = await fetch("https://jsonplaceholder.typicode.com/users",{cache: "no-store"})
    
    const users: User[] = await res.json();

    // const sortedUsers = sort(users).asc();

    return (
    <div>
      
    </div>
  )
}


export default UserTable
