import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color: "orange" | "blue"
}

const MemberCard: React.FC<MemberCardProps> = ({ color }) => {
  return (
    <div>
      <Card className={cn('w-full', color === 'orange' ? 'bg-[#f29727]' : 'bg-[#2994b2]')}>
        <CardHeader className='px-0 pt-0 rounded-t-lg'>
          <Image className='rounded-t-lg  object-cover' src='/rafi.png' alt='Rafi' width={200} height={200} />
        </CardHeader>
        <CardContent>
          <CardTitle className='text-2xl font-bold text-white'>Rafi Ardiel Erinaldi</CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription className='text-white'>Bachelor of Advanced Computing (Honors)</CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MemberCard
