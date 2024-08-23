'use client'
import GoogleOAuth from '@/components/GoogleOAuth'
import { Google } from '@mui/icons-material'
import { Box, OutlinedInput } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('') 
  let[formData, setFormData] = useState({})
  const route = useRouter()

  formData = { email: username, password: password}  
  
  const handleSubmit = async () => { 
    const login = await axios.post('http://localhost:8000/user/loginUser', formData)
    console.log(login.data)
    const token = login.data.token
    localStorage.setItem('token', token)
    route.push('/')
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10 gap-10'>
        <div> Please Login </div>
         <GoogleOAuth/>
        <Box className="border-b-2 w-1/6 border-black"> </Box>
        <div className='flex flex-col gap-4'> 
            <OutlinedInput type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='username...'/>
            <OutlinedInput type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password....'/>
        </div>
        <button className='border-[1px] w-56 border-gray-300 rounded p-2 px-4 text-base' type='submit' onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login