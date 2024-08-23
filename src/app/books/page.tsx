import React from 'react'

const page = () => {
    const Page2 = () => { 
        return (
            <div> 
                Page2
            </div>
        )
    }
  return (
    <div> 
        Page1
        <Page2/>
    </div>

  )
}

export default page
