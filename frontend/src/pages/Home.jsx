import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { getBlogs } from '../api/Api'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs()
            setBlogs(allBlogs.data)
        }
        fetchData()
    }, []);

    useEffect(() => {
        async function fetchData(){
            let category = searchParams.get('category')
            const allBlogs = await getBlogs(category)
            setBlogs(allBlogs.data)
        }
        fetchData()
    }, [searchParams]);

    const blogData = [
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/200/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/201/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/202/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/203/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/204/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/206/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/208/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/209/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/210/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
    ]
  return (
    <div className=''>
        {/* <p>{JSON.stringify(blogs)}</p> */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {blogs && blogs.map((data, i) => {
                return <BlogCard key={i} blogdata = {data}/>
            })}
        </div>
    </div>
  )
}

export default Home