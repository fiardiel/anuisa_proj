import React from 'react'
import MemberCard from './MemberCard'

const MemberList = () => {
  return (
    <div className='grid grid-cols-3 gap-6 mt-10'>
      {[1, 2, 3, 4, 5].map((member, index) => (
        <div>
          <MemberCard color={index % 2 === 0 ? 'blue' : 'orange'} key={member} />
        </div>
      ))}
    </div>
  )
}

export default MemberList
