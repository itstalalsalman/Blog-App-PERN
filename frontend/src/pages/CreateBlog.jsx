import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreateBlog = () => {
    const [value, setValue] = useState('')

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

                <label htmlFor='' className='ml-1 text-white'>Title</label>
                <input type='text' className='h-10 border border-white rounded my-2 p-2 text-black' />
 
                <label htmlFor='' className='ml-1 text-white'>Category</label>
                <select name='' id='' className='h-10 border border-white rounded my-2 p-2 text-black'>
                    {menu.map(category => {
                        return <option value={category.text}>{category.text}</option>
                    })}
                    
                </select>
 
                <label htmlFor='' className='ml-1 mt-2 text-white'>Image</label>
                <input type='file' className='border-white rounded my-2 p-1 text-white'/>
 
                <label htmlFor='' className='ml-1 mt-2 text-white'>Post</label>
                <ReactQuill className='bg-black rounded mt-2 editingarea' theme="snow" value={value} onChange={setValue} />

                <hr />
                <button className='bg-black text-white h-8 w-[100px] mt-5 rounded-lg border'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CreateBlog