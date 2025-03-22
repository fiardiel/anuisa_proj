import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='flex sticky top-0 justify-between border-t-gray-50 bg-[#f29727] w-full h-20 items-center p-10 rounded-b-2xl'>
      <div>
        <Image src="/logo.png" alt="logo" width={125} height={125} />
      </div>
      <div className='flex gap-3'>
        <Button variant={'link'} className='text-lg font-medium'>About Us</Button>
        <Button variant={'link'} className='text-lg font-medium'>Events</Button>
        <Button variant={'link'} className='text-lg font-medium'>Members</Button>
      </div>
    </div>
  )
}

export default Navbar
