import React, {useState} from 'react'
import {HiMenuAlt3, HiOutlineX} from 'react-icons/hi'

const Navbar = () => {
      const [nav, setNav] = useState(false)

      const handleNav = () => {
          setNav(!nav)

      }

  return (
    <div className='flex justify-between items-center p-4 absolute w-full '>
        <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
        {!nav ? (<HiMenuAlt3 onClick={handleNav} className='text-white cursor-pointer z-20' size={25}/>) : (<HiOutlineX onClick={handleNav} className='text-white cursor-pointer z-20' size={25}/>)}
        
      {/* toggle menu */}
          <div className={nav ? ('ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10') :
                            ('absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10')}>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>Home</li>
          <li className='font-bold text-3xl p-8'>Destination</li>
          <li className='font-bold text-3xl p-8'>Reservation</li>
          <li className='font-bold text-3xl p-8'>Amenities</li>
          <li className='font-bold text-3xl p-8'>Rooms</li>
        </ul>
      </div>      
    </div>

  )
}

export default Navbar