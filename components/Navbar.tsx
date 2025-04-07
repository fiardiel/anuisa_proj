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
    <div className="sticky top-0 z-50"> {/* Sticky wrapper with high z-index */}
      <div className='flex justify-between border-t-gray-50 bg-[#ffffff] w-full h-20 items-center p-14 rounded-b-none'>
        <div>
          <Link href={'/'}>
            <Image src="/logo.png" alt="logo" width={125} height={125} />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between border-t-gray-50 bg-black h-10 items-center p-10 rounded-b-none'>
        <div></div>
        <div>
          {/* Mobile Menu */}
          <div className='block sm:hidden'>
            <Drawer direction="top">
              <DrawerTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm font-medium shadow-sm text-white">
                <Menu />
              </DrawerTrigger>
              <DrawerOverlay className="fixed inset-0 bg-black/40 transition-all duration-500 ease-in-out" />
              <DrawerContent className="m-0 w-full top-0 bottom-50 outline-none rounded-none rounded-t-none bg-[#ffffff] overflow-visible">
                <div className="p-8 flex flex-col justify-between items-center">
                  <div className="max-w-md mx-auto">
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
          {/* Desktop Menu */}
          <div className='hidden sm:flex'>
            <Button asChild variant={'link'} className='text-lg font-sm text-white'>
              <Link href={'/events'}>Highlights</Link>
            </Button>
            <Button asChild variant={'link'} className='text-lg font-sm text-white'>
              <Link href={'/aboutus'}>About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
