'use client'
import { OutlinedInput } from '@mui/material'
import react, { useState } from 'react'

const SignUp = () => { 
    const [name,setName] = useState()

    return ( 
        <div className='flex flex-col justify-center items-center mt-10 gap-10'> 
            SignUp
        <div>
            <div className='flex flex-col gap-4'> 
                <OutlinedInput type='text'  placeholder='name'/>
                <OutlinedInput type='text'  placeholder='username'/>
                <OutlinedInput type='password' placeholder='password'/>
            </div>
        </div>
        <button className='border-[1px] w-56 border-gray-300 rounded p-2 px-4 text-base' type='submit'>Submit</button>
        </div>
    )
}

export default SignUp