import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerOverlay
} from "@/components/ui/drawer"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex sticky top-0 justify-between border-t-gray-50 bg-[#bf872b] w-full h-20 items-center p-10 rounded-b-2xl'>
      <div>
        <Link href={'/'}>
          <Image src="/logo.png" alt="logo" width={125} height={125} />
        </Link>
      </div>
      <div>
        <div className='block sm:hidden'>
          <Drawer direction="top">
            <DrawerTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#fffae0] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
              <Menu />
            </DrawerTrigger>
            <DrawerOverlay className="fixed inset-0 bg-black/40 transition-all duration-500 ease-in-out" />
            <DrawerContent
              className="m-0 left-7 right-7 top-0 bottom-50 outline-none w-[450px] rounded-b-2xl rounded-t-none bg-[#fffae0] transition-transform duration-500 ease-in-out overflow-visible"
            >
              <div className="p-8 flex flex-col justify-between items-center">
                <div className="max-w-md mx-auto ">
                  <Button asChild variant={'link'} className='text-lg font-medium'>
                    <Link href={'/events'}>Highlights</Link>
                  </Button>
                  <Button asChild variant={'link'} className='text-lg font-medium'>
                    <Link href={'/aboutus'}>About Us</Link>
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <div className='hidden sm:flex gap-3'>
          <Button asChild variant={'link'} className='text-lg font-medium'>
            <Link href={'/events'}>Highlights</Link>
          </Button>
          <Button asChild variant={'link'} className='text-lg font-medium'>
            <Link href={'/aboutus'}>About Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
