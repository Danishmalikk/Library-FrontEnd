'use client'
import { Google } from '@mui/icons-material'
import React from 'react'

const GoogleOAuth = () => {
    const client_id = '591417907176-9e8d7vts6sv2r7rofpseh0jnm7q2bfue.apps.googleusercontent.com'; 
    const state = self.crypto.randomUUID()
    localStorage.setItem('latestCSRFToken', state)
    const link = `https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/cloud-platform&response_type=code&access_type=offline&state=${state}&redirect_uri=${window.location.origin}/integrations/google/oauth2/callback&client_id=${client_id}`;
  
  return (
    <div> 
        <button className='text-lg'>Sign in with Google <Google/></button>
    </div>
  )
}

export default GoogleOAuth