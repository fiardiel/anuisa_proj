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
} from "@/components/ui/drawer"

const Navbar = () => {
  return (
    <div className='flex sticky top-0 justify-between border-t-gray-50 bg-[#f29727] w-full h-20 items-center p-10 rounded-b-2xl'>
      <div>
        <Image src="/logo.png" alt="logo" width={125} height={125} />
      </div>
      <div>
        <div className='block sm:hidden'>

          <Drawer direction='top'>
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent className='top-0 h-56 fixed'>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
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
