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

interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  uni_id: string
  color: "orange" | "blue"
  image: string
  full_name: string
  program: string
}

const MemberCard: React.FC<MemberCardProps> = ({ uni_id, color, image, full_name, program }) => {
  return (
    <Link href={`/members/${uni_id}?color=${color}`} passHref className="block">
      <div className='flex flex-row justify-center text-center h-full w-full min-w-[26rem] transition-transform duration-300 ease-in-out hover:scale-105'>
        <Image className='rounded-none  object-cover' src={image} alt='Rafi' width={200} height={200} />
        <Card className={cn('pt-10', 'w-full', 'rounded-none', 'border-none', color === 'orange' ? 'bg-black' : 'bg-black')}>
          <CardContent>
            <CardTitle className='text-2xl font-bold text-white hover:underline'>{full_name} <span className="ml-2">&raquo;</span></CardTitle>
          </CardContent>
          <CardFooter className='justify-center'>
            <CardDescription className='text-white text-sm hover:underline'>{program} <span className="ml-2">&raquo;</span></CardDescription>
          </CardFooter>
        </Card>
      </div>
    </Link>

  )
}

export default MemberCard
