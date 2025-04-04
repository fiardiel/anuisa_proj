import React from 'react'
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import ProfileImage from '../ui/ProfileImage';
import Image from 'next/image'
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  identifier: string
  image: string
  full_name: string
  program: string
}

const MemberCard: React.FC<MemberCardProps> = ({ identifier, image, full_name, program }) => {
  return (
    <Link href={`/members/${identifier}`} passHref className="h-auto">
      <div className='grid grid-cols-5 sm:flex justify-center text-center w-full min-w-[20rem] max-w-[600px] transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl h-full shadow-lg'>
        <ProfileImage
          className='border-2 border-r-0 border-gray-300 rounded-r-none rounded-l-xl object-cover sm:h-auto h-full col-span-2'
          profilePictureUrl={image}
          name={full_name}
          width={200}
          height={200} />
        <Card className="flex flex-col justify-between border-2 border-l-0 border-gray-300 pt-6 sm:w-full rounded-l-none rounded-r-xl h-auto bg-black col-span-3">
          <CardContent className='text-left'>
            <CardTitle className='sm:text-4xl text-2xl font-bold text-white'>{full_name}</CardTitle>
            <CardDescription className='mt-1 sm:text-xl text-normal font-normal text-white'>{program}</CardDescription>
          </CardContent>
          <CardFooter className='text-left'>
            <Button className='bg-[#BF872B] hover:bg-[#BF872B] hover:opacity-75 transition'>
              View <Eye className='text-xl' size={30} />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Link>

  )
}

export default MemberCard
