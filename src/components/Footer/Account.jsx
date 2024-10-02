import React from 'react'
 


function Account() {
  return (
    <div className="h-screen w-full bg-no-repeat bg-cover 
    bg-[url('https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stywo-1054218.jpg&fm=jpg')]
    ">
        <div className='w-[50%] h-[100%] bg-black/20 flex flex-col justify-around'>
        <img src=" https://avatars.githubusercontent.com/u/175542759?v=4" alt="image" 
        className='mx-auto mt-7 w-40 rounded-full'/>
        <div className='mx-auto'>
            <h1 className='font-bold text-3xl text-center '>Ankur Pathak</h1>
            <p className='mt-6 text-2xl font-thin'>This is my Personal Page</p>
        </div>
        <p className='ml-10 text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus minus in enim quae velit repellat voluptatem maxime voluptas unde magnam nulla beatae ut exercitationem at nesciunt, recusandae repellendus earum.</p>
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