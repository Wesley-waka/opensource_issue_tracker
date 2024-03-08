'use client';
import { useRouter } from 'next/navigation'
import React from 'react'

const Form = () => {
    const router = useRouter();

  return (
    <div>
      <button className='btn btn-primary' onClick={()=> router.push('/issues')}>Programmatic Navigation</button>
    </div>
  )
}

export default Form
