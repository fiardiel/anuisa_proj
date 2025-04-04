'use client'

import React, { useState } from 'react'
import MemberCard from './MemberCard'
import Reveal from '../utils/Reveal'
import { Member } from '@/types/Member'
import FilterControls from '../filter/FilterControls'
import { Drawer, DrawerContent, DrawerOverlay, DrawerTrigger } from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MemberListProps {
  members: Member[]
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  const [degree, setDegree] = useState<string>('')
  const [college, setCollege] = useState<string>('')
  const [isSTEM, setIsStem] = useState<string>("")

  const isSTEMBoolean = isSTEM === "" ? null : isSTEM === "true"

  const filteredMembers = members.filter(member => {
    const matchesDegree = degree ? member.degree === degree : true
    const matchesCollege = college ? member.college === college : true
    const matchesIsSTEM = isSTEMBoolean !== null ? member.is_stem === isSTEMBoolean : true
    return matchesDegree && matchesCollege && matchesIsSTEM
  })

  return (
    <div className="px-4">
      {/* Mobile Filter Button + Drawer */}
      <div className="sm:hidden flex justify-center mb-8 mt-4">
        <Drawer direction="top">
          <DrawerTrigger asChild>
            <Button className="flex items-center gap-2">
              <Menu />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerOverlay className="fixed inset-0 bg-black/40" />
          <DrawerContent className="bg-white rounded-none p-6 m-0 bottom-100 shadow-xl w-full max-w-full top-0 overflow-hidden">
            <FilterControls
              degree={degree}
              setDegree={setDegree}
              college={college}
              setCollege={setCollege}
              isSTEM={isSTEM}
              setIsStem={setIsStem}
            />
          </DrawerContent>
        </Drawer>
      </div>

      {/* Filters Inline for Tablet and Up */}
      <div className="hidden sm:flex justify-center mb-6 mt-6">
        <FilterControls
          degree={degree}
          setDegree={setDegree}
          college={college}
          setCollege={setCollege}
          isSTEM={isSTEM}
          setIsStem={setIsStem}
        />
      </div>

      {/* Empty State */}
      {filteredMembers.length === 0 && (
        <p className="text-gray-500 text-center">No members match the selected filters.</p>
      )}

      {/* Filtered Members */}
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-6 md:gap-y-14">
        {filteredMembers.map((member, index) => (
          <div key={member.identifier}>
            <Reveal className='h-full'>
              <MemberCard
                identifier={member.identifier}
                image={member.profile_picture_url}
                full_name={member.full_name}
                program={member.program}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemberList
