import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img    
                className='top-0 left-0 w-full h-screen object-cover'
                src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg' 
                alt='bg' 
        />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1120px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at error tempore nemo possimus quis, sunt ex hic similique quas alias nostrum. Totam autem rerum praesentium eaque expedita doloremque nemo?</p>
                <div>
                    <button className='bg-white text-black '>Reserve Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero