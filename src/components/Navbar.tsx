'use client'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [token, setToken] = useState('')
  const router = useRouter()
  useEffect(()=>{ 
    if(typeof window!== 'undefined') { 
        setToken(localStorage.getItem('token'))
    }
  },[])

  const handleLogout = () => { 
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <div className='flex flex-row items-center justify-between'>
         <Link href={'/'}> Library Management </Link>
         <Link href={'/mybooks'}> My Books </Link>
         <Link href={'/'}> My Browse </Link>
         <div className='flex gap-4'> 
            {token ? <Link onClick={handleLogout} href={'/'}> Logout </Link> : <Link href={'/login'}> Login </Link> }
            <Link href={'/signup'}> Sign Up </Link>
         </div> 
    </div> 
  )
}

export default Navbar