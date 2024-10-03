import React from 'react'
import { Link } from 'react-router-dom'

function Logo({width = '100px'}) {
  return (
    <div className=' w-[70px] md:w-[100px]'>
     <Link to="/account"><img src="https://i.ibb.co/cYzZTjb/logo.png" alt="logo"   /></Link>
    </div>
  )
}

export default Logo