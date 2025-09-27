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
    <div>
      <div className='flex top-0 justify-between border-t-gray-50 bg-[#ffffff] w-full h-20 items-center p-14 rounded-b-none'>
        <div>
          <Link href={'/'}>
            <Image src="/logo.png" alt="logo" width={125} height={125} />
          </Link>
        </div>
      </div>
      <div className='w-full flex top-0 sticky justify-between border-t-gray-50 bg-black h-10 items-center p-10 rounded-b-none'>
        <div>
        </div>
        <div>
          <div className='block sm:hidden'>
            <Drawer direction="top">
              <DrawerTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm font-medium shadow-sm text-white">
                <Menu />
              </DrawerTrigger>
              <DrawerOverlay className="fixed inset-0 bg-black/40 transition-all duration-500 ease-in-out" />
              <DrawerContent
                className="m-0 w-full top-0 bottom-50 outline-none rounded-none rounded-t-none bg-[#ffffff] overflow-visible"
              >
                <div className="p-8 flex flex-col justify-between items-center">
                  <div className="max-w-md mx-auto">
                    <Button asChild variant={'link'} className='text-base font-medium'>
                      <Link href={'/highlights'}>Highlights</Link>
                    </Button>
                    <Button asChild variant={'link'} className='text-base font-medium'>
                      <Link href={'/aboutus'}>About Us</Link>
                    </Button>
                    <Button asChild variant={'link'} className='text-base font-medium justify-center'>
                      <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSdc8MmaXN2Naab0WfXTPHnrtJyce39mwGNTmNAn33RBTXCe3w/closedform'}>Join Us</Link>
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className='hidden sm:flex gap-5'>
            <Button asChild variant={'link'} className='text-lg font-sm text-white'>
              <Link href={'/'}>Talent Hub</Link>
            </Button>
            <Button asChild variant={'link'} className='text-lg font-sm text-white'>
              <Link href={'/highlights'}>Highlights</Link>
            </Button>
            <Button asChild variant={'link'} className='text-lg font-sm text-white'>
              <Link href={'/aboutus'}>About Us</Link>
            </Button>
            <Button asChild className='text-lg bg-[#BF872B] hover:bg-opacity-80 font-sm py-5 text-white'>
              <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSdc8MmaXN2Naab0WfXTPHnrtJyce39mwGNTmNAn33RBTXCe3w/closedform'}>Join Us!</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
