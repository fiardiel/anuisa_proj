import MemberCard from '@/components/members/MemberCard'
import MemberList from '@/components/members/MemberList'
import React from 'react'

const Members = () => {
  return (
    <div className='p-10 mt-10'>
      <h1 className='text-5xl font-semibold'>Members</h1>
      <div>
        <MemberList />
      </div>
    </div>
  )
}

export default Members

