import React, { useEffect, useState } from 'react'
import { getBlogbyid } from '../api/Api';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser'
import dateFormat from 'dateformat'

const Blog = () => {

    const {id} = useParams();
    const apiURL = 'http://localhost:3000/'; 

    const [blog, setBlog] = useState(null)

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogbyid(id)
            setBlog(allBlogs.data[0])
            console.log("asd",allBlogs.data[0])
        }
        fetchData()
    }, []);


   

  return (
    <div className='flex justify-center items-center'>
        {blog && <div className='flex flex-col w-[60%] overflow-hidden'>
            <h1 className='text-4xl mt-1 font-extrabold'>{blog.title}</h1>

            <div className='flex mt-4 mb-4'>
                <small>{dateFormat(blog.createon, "dddd, mmmm dS, yyyy, h:MM TT")}</small>
            </div>
            <img className='rounded-lg' src={apiURL+blog.image} alt='' />
            <div>
                {parse(blog.post)}
            </div>
        </div>}
    </div>
  )
}

export default Blog