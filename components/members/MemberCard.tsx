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
      <Card className={cn(
        'w-full min-w-[300px]', // Sets a consistent max width
        'h-full min-h-[300px] flex flex-col items-center', // Ensures uniform height
        'rounded-none border-none', 
        color === 'orange' ? 'bg-black' : 'bg-black'
      )}>
        <div className="w-full aspect-square relative">  
          {/* Ensures square aspect ratio */}
          <Image 
            className="object-cover rounded-none" 
            src={image} 
            alt={full_name} 
            layout="fill"
          />
        </div>
        <CardContent className="flex flex-col items-center text-center">
          <CardTitle className='text-3xl font-bold text-white pt-4'>{full_name}</CardTitle>
        </CardContent>
        <CardFooter className="flex justify-center text-center">
          <CardDescription className='text-white'>{program}</CardDescription>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default MemberCard
