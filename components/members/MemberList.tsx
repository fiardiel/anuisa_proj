import React from 'react'
import MemberCard from './MemberCard'
import fetchMembers from '@/lib/members/fetchMembers'

const MemberList = async () => {
  const members = await fetchMembers()
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10'>
      {members.map((member, index) => (
        <div>
          <MemberCard color={index % 2 === 0 ? 'blue' : 'orange'} key={member.uni_id} image={member.profile_picture_url} full_name={member.full_name} program={member.program} />
        </div>
      ))}
    </div>
  )
}

export default MemberList
