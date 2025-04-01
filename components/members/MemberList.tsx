'use client'

import React from 'react'
import MemberCard from './MemberCard'
import Reveal from '../utils/Reveal'
import { Member } from '@/types/Member'

interface MemberListProps {
  members: Member[]
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10'>
      {members.map((member, index) => (
        <div key={member.uni_id}>
          <Reveal>
            <MemberCard color={index % 2 === 0 ? 'blue' : 'orange'} image={member.profile_picture_url} full_name={member.full_name} program={member.program} />
          </Reveal>
        </div>
      ))}
    </div>
  )
}

export default MemberList
