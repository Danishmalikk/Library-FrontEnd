'use client'
import { Box, Button, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Link from 'next/link';
import Image from 'next/image';

const BookCards = () => {
  const [books, setBooks] = useState([])
 
  useEffect(()=>{ 
    axios.get("http://localhost:8000/book/getBooks").then((data)=>setBooks(data.data))
  },[])

  console.log("Books data", books)
  return (
    <Paper style={{display:'flex',flexWrap:"wrap", gap:"1rem", padding: "2rem", marginTop:"2rem"}}>
      {books.map((book)=>(
        <Box key={book._id} > 
            <Box className="border-2 border-solid border-black p-4 rounded-md flex flex-col gap-2"> 
                <Typography className='text-2xl'>Name : {book.title}</Typography>
                <Typography>Year : {book.year}</Typography>
                <Typography>Total Pages : {book.pages}...</Typography>
                <Link href={book.link}> See More...</Link>
                <Typography>Written By: {book.author}</Typography>
            </Box>
        </Box>
       ))}
    </Paper>
  )
}

export default BookCards