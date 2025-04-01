import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay
} from "@/components/ui/drawer"

const Navbar = () => {
  return (
    <div className='flex sticky top-0 justify-between border-t-gray-50 bg-[#f29727] w-full h-20 items-center p-10 rounded-b-2xl'>
      <div>
        <Image src="/logo.png" alt="logo" width={125} height={125} />
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
                    <Button variant={'link'} className='text-lg font-medium'>About Us</Button>
                    <Button variant={'link'} className='text-lg font-medium'>Events</Button>
                    <Button variant={'link'} className='text-lg font-medium'>Members</Button>
                </div>
              </div>
            </DrawerContent>
        </Drawer>
        </div>
        <div className='hidden sm:flex gap-3'>
          <Button variant={'link'} className='text-lg font-medium'>About Us</Button>
          <Button variant={'link'} className='text-lg font-medium'>Events</Button>
          <Button variant={'link'} className='text-lg font-medium'>Members</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
