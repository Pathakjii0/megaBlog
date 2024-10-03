import React from 'react'
 


function Account() {
  return (
    <div className="h-screen w-full bg-no-repeat bg-cover 
    bg-[url('https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stywo-1054218.jpg&fm=jpg')]
    ">
        <div className='w-[50%] h-[100%] bg-black/20 flex flex-col justify-around'>
        <img src=" https://avatars.githubusercontent.com/u/175542759?v=4" alt="image" 
        className='mx-auto  w-40 rounded-full'/>
        <div className='w-full flex flex-col justify-center text-center'>
            <h1 className='font-bold text-3xl text-center '>Ankur Pathak</h1>
            <p className=' mt-2 text-2xl  font-thin'>Front-End Developer</p>
        </div>
        <p className='md:text-center text:[8px] md:text-[15px] text-white'>Hi, I'm Ankur Pathak, a website creator with a passion for building innovative and 
          user-friendly online experiences. This Blog website is created by me as a practice. If you have any Query related to this website, 
          I'd love to hear from you. Please feel free to contact me on  pathakank457@gmail.com .</p>
        <button className='font-medium text-blue-200 mx-auto bg-black w-40 h-10
         rounded-lg'>Get in touch</button>
        <div className='flex mx-auto gap-5'>
        <a href="https://www.facebook.com/ankur.pathak.5832343/"><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/></a>
        <a href=""><img src="https://img.icons8.com/fluency/48/000000/twitter.png"/></a>
        <a href="https://www.instagram.com/_pathak_ji_____/"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
        <a href="https://www.linkedin.com/in/ankur-pathak-039058296"><img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></a>
        <a href="https://github.com/Pathakjii0"><img src="https://img.icons8.com/fluency/48/000000/github.png"/></a>

        </div>

        </div>
    </div>
  )
}

export default Account