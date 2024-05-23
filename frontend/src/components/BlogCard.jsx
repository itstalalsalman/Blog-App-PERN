import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    let blogdata = props.blogdata
    const apiURL = 'http://localhost:3000/';
    console.log(blogdata)
  return (
    <div className='bg-white shadow-md overflow-hidden rounded-xl'>
        <Link to='/blog'>
            <div className='flex flex-col w-full'>
                <img src={apiURL+blogdata.image} alt=''/>
                <div className='p-2'>
                    <h2 className='mt-1 text-xl text-left'>{blogdata.title}</h2>
                    <p className='text-sm text-left opacity-70'>{blogdata.description}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default BlogCard