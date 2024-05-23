import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { uploadFile, createBlog } from '../api/Api'

const CreateBlog = () => {

    const blankBlog = {
        "title" : "",
        "image" : "",
        "post" : "<p><br></p>",
        "category" : ""
    }

    const [newBlog, setNewBlog] = useState(blankBlog);

    const handleUpload = async (event) => {
        let uploadedFile = await uploadFile(event.target.files[0])
        if(uploadedFile.path){
            setNewBlog({...newBlog,image:uploadedFile.path})
        }
    }

    const handleSumbit = async () => {
        let createdBlog = await createBlog(newBlog);
        console.log(newBlog)
        setNewBlog(blankBlog);
        alert("Blog Added Successfully!!")
    }

    const menu = [
        {text: "Nature", path: '/'},
        {text: "Travel", path: '/'},
        {text: "Technology", path: '/'},
        {text: "Politics", path: '/'},
    ]

  return (
    <div className='flex w-full items-center justify-center'>
        <div className='bg-black text-white w-[60%] p-5 rounded-xl'>
            <h1 className='text-2xl mb-5'>Create Trending Blog Post</h1>
            <div className='flex flex-col'>
                {/* <small>{JSON.stringify(newBlog)}</small> */}
                <label htmlFor='' className='ml-1 text-white'>Title</label>
                <input type='text' value={newBlog.title} onChange={(e) => setNewBlog({...newBlog,title:e.target.value})} className='h-10 border border-white rounded my-2 p-2 text-black' />
 
                <label htmlFor='' className='ml-1 text-white'>Category</label>
                <select value={newBlog.category} onChange={(e) => setNewBlog({...newBlog,category:e.target.value})} name='' id='' className='h-10 border border-white rounded my-2 p-2 text-black'>
                    <option value="" default disabled>Select Category</option>
                    {menu.map(category => {
                        return <option value={category.text}>{category.text}</option>
                    })}
                    
                </select>
 
                <label htmlFor='' className='ml-1 mt-2 text-white'>Image</label>
                <input onChange={(e) => handleUpload(e)} type='file' className='border-white rounded my-2 p-1 text-white'/>
 
                <label htmlFor='' className='ml-1 mt-2 text-white'>Post</label>
                <ReactQuill className='bg-black rounded mt-2 editingarea' theme="snow" value={newBlog.post} onChange={(e) => {setNewBlog({...newBlog,post:e})}} />

                <hr />
                <button onClick={() => handleSumbit()} className='bg-black text-white h-8 w-[100px] mt-5 rounded-lg border'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CreateBlog