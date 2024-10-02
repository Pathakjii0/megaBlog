import React from 'react'
import data from './data'
import { useParams } from 'react-router-dom'
import Logo from '../Logo';
function Page() {
let id=useParams().id;

  return (
    <div className=' min-h-screen  bg-green-200'>
        <Logo/>
        {
            data.map((ele)=>(
                ele.id==id?(
                <div className="w-full p-5" key={ele.title}>
                   <h1 className='text-center text-5xl my-[100px] font-bold text-blue-500'>{ele.title}</h1>
                   <div className="w-[50%] mx-auto text-3xl  p-5">{ele.content}</div>

                </div>):null
            ))
        }
    </div>
  )
}

export default Page