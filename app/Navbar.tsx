'use client'
import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai';
import {usePathname} from 'next/navigation';
import classnames from 'classnames';

interface links{
    href: string;
    label: string;
}

const Navbar = () => {

    const currentPath = usePathname();
    const Links: links[] =[
        {href:"/dashboard",label: "Dashboard"},
        {href:"/issues",label: "Issues"}
    ]
    return (
    <nav className='flex flex-row space-x-4 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug/></Link>
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
