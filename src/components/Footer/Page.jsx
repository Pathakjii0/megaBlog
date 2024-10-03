import React from 'react'
import data from './data'
import { useParams } from 'react-router-dom'
import Logo from '../Logo';
function Page() {
let id=useParams().id;

  return (
    <div className=' min-h-screen  bg-white-500'>
        <Logo/>
        {
            data.map((ele)=>(
                ele.id==id?(
                <div className="w-full grid grid-rows-2 " key={ele.title}>
                   <h1 className='text-center text-5xl my-auto font-bold text-blue-800'>{ele.title}</h1>
                   <div className=" text-2xl md:mx-auto md:text-3xl text-center">{ele.content}</div>

                </div>):null
            ))
        }
    </div>
  )
}

export default Page