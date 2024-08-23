'use client'
import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddBooks = () => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [formData, setData] = useState({})

  const sendFormData = (e : Event)=>{
    e.preventDefault()
    console.log(formData)
    const sendData = axios.post('http://localhost:8000/book/addBook',formData)
    .then((data)=>console.log(data.data.message))

  }

  const handleInputChange = (e) => { 
    // e.preventDefault()
     const {name, value} = e.target 
     setData((prevData)=>({ 
      ...prevData, 
      [name] : value
     })); 
  };

  return (
    <div className="flex gap-10">
      <input
        className="border-[1px] border-gray-400 px-2  p-[3px]"
        placeholder="search any "
      />
    <div> 
      <button onClick={handleOpen} className="border-2 border-gray-500 text-base rounded-md px-2">
        Add book
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={sendFormData} > 
                <label> Book Name </label> 
                <input onChange={handleInputChange}
                name="bookName" 
                value={formData.bookName}
                placeholder="bookName" type="text" /> 
                <label> Author Name </label> 
                <input 
                name="authorName" 
                value={formData.authorName}
                onChange={handleInputChange} placeholder="Author Name" type="text" /> 
                <label> Available Qty </label> 
                <input 
                  name="availableQty" 
                  value={formData.availableQty} onChange={handleInputChange}  placeholder="number" type="number" /> 
                <label> Image </label> 
                <input 
                                name="image" 
                                value={formData.image}
                onChange={handleInputChange} placeholder="image" alt="image" type="text" /> 
                <label> Category </label> 
                <input 
        
                name="category" 
                value={formData.category} onChange={handleInputChange} placeholder="category" type="text" /> 
                <button className="border-2 border-black mt-2 rounded px-2" type="submit" > Submit </button>
            </form>
        </Box>
      </Modal>
    </div>
  </div>
  );
};

export default AddBooks;
