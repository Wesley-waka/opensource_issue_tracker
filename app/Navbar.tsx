'use client';

import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai';
import {usePathname} from 'next/navigation';
import classnames from 'classnames';
import { useSession } from 'next-auth/react';

interface links{
    href: string;
    label: string;
}

const Navbar = () => {
    const currentPath = usePathname();
    const {status,data: session} = useSession();
    if(status === 'loading') return null;


    const Links: links[] =[
        {href:"/dashboard",label: "Dashboard"},
        {href:"/issues",label: "Issues"}
    ]
    return (
    <nav className='flex flex-row space-x-4 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug/></Link>
        <Link href='/api/auth/signin'>Login</Link>
        <Link href='/users'>Users</Link>
        {status === 'authenticated' && <div>{session.user!.name}</div>}
        {status === 'unauthenticated' && <Link href="/api/auth/signin"></Link>}
        <ul className='flex space-x-6'>
            {Links.map((link)=>
            <li
            key={link.href} 
            >
            <Link 
                className={classnames({
                    'text-zinc-900': link.href === currentPath,
                    'text-zinc-500': link.href !== currentPath,
                    'hover:text-zinc-800 transition-colors': true,
                })} 
                href={link.href}
            >
            {link.label}
            </Link>
            </li>
            )}
        </ul>
    </nav>
    )
}

export default Navbar
