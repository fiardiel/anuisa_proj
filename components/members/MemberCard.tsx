import React from 'react'
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
  color: "orange" | "blue"
  image: string
  full_name: string
  program: string
}

const MemberCard: React.FC<MemberCardProps> = ({ color, image, full_name, program }) => {
  return (
    <div className='flex'>
      <Image className='rounded-l-lg  object-cover' src={image} alt='Rafi' width={200} height={200} />
      <Card className={cn('w-full', 'rounded-l-none', 'border-none', color === 'orange' ? 'bg-[#f29727]' : 'bg-[#2994b2]')}>
        <CardContent>
          <CardTitle className='text-3xl font-bold text-white pt-6'>{full_name}</CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription className='text-white'>{program}</CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MemberCard
