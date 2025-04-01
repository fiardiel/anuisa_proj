import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex sticky top-0 justify-between border-t-gray-50 bg-[#f29727] w-full h-20 items-center p-10 rounded-b-2xl'>
      <div>
        <Link href={'/'}>
          <Image src="/logo.png" alt="logo" width={125} height={125} />
        </Link>
      </div>
      <div className='flex gap-3'>
        <Button asChild variant={'link'} className='text-lg font-medium'>
          <Link href={'/aboutus'}>About Us</Link>
        </Button>
        <Button asChild variant={'link'} className='text-lg font-medium'>
          <Link href={'/events'}>Events</Link>
        </Button>
        <Button asChild variant={'link'} className='text-lg font-medium'>
          <Link href={'/members'}>Members</Link>
        </Button>
      </div>
    </div>
  )
}

export default Navbar
