import MemberList from '@/components/members/MemberList'
import fetchMembers from '@/lib/members/fetchMembers'
import React from 'react'

const Members = async () => {
  const members = await fetchMembers()
  return (
    <div className='p-10 mt-10'>
      <h1 className='text-5xl font-semibold'>Members</h1>
      <div>
        <MemberList members={members} />
      </div>
    </div>
  )
}

export default Members

