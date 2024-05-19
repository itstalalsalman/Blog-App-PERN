import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {

    const menu = [
        {text: "Nature", path: '/'},
        {text: "Travel", path: '/'},
        {text: "Technology", path: '/'},
        {text: "Politics", path: '/'},
    ]
  return (
    <div>
        {/* Header */}
        <div className='border-b'>
            <div className='container px-5 py-5 flex justify-between'>
                <span className='font-bold text-2xl'>TrendTrail</span>
                <div className='flex'>
                    <ul className='flex'>
                        {
                            menu.map(items => {
                                return <li><Link className='p-2 items-center justify-center flex'><span>{items.text}</span></Link></li>
                            })
                        }
                    </ul>
                    <button className='bg-black text-white px-2 py-1 rounded-xl font-bold'>
                        <Link>New Post</Link>
                    </button>
                </div>
            </div>
        </div>
        {/* Body */}
        <div className='flex mx-auto px-5 md:px-20 '>
            <div className='mt-5 mb-5 min-h-[500px] w-full'>
                <Outlet></Outlet>
            </div>
        </div>

        {/* Footer */}
        <div className='flex bg-black'>
            <div className='flex mx-auto px-20 py-20 items-center justify-center'>
                <h3 className='text-white'>TrendTrail</h3>
            </div>
        </div>
    </div>
  )
}

export default Layout