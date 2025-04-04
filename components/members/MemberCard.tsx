import React from 'react'
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  uni_id: string
  color: "orange" | "blue"
  image: string
  full_name: string
  program: string
}

const MemberCard: React.FC<MemberCardProps> = ({ uni_id, color, image, full_name, program }) => {
  return (
    <Link href={`/members/${uni_id}?color=${color}`} passHref className="block h-full">
      <div className='flex justify-center text-center w-full min-w-[26rem] max-w-[700px] transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl h-full shadow-lg'>
        <Image className='border-2 border-r-0 border-gray-300 rounded-r-none rounded-l-xl object-cover h-auto' src={image} alt='Rafi' width={200} height={200} />
        <Card className={cn('flex', 'flex-col', 'justify-between', 'border-2', 'border-l-0', 'border-gray-300', 'pt-6', 'w-full', 'rounded-l-none', 'rounded-r-xl', 'h-auto', color === 'orange' ? 'bg-black' : 'bg-black')}>
          <CardContent className='text-left'>
            <CardTitle className='text-4xl font-bold text-white'>{full_name}</CardTitle>
            <CardDescription className='mt-1 text-xl font-normal text-white'>{program}</CardDescription>
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
