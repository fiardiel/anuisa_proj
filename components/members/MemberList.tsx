'use client'

import React, { useState } from 'react'
import MemberCard from './MemberCard'
import Reveal from '../utils/Reveal'
import { Member } from '@/types/Member'

interface MemberListProps {
  members: Member[]
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  // State for filters
  const [degree, setDegree] = useState<string>('')
  const [college, setCollege] = useState<string>('')
  const [isSTEM, setIsStem] = useState<string>('') // 'true', 'false', or ''

  // Convert `isSTEM` value to boolean or keep it null if not selected
  const isSTEMFilter = isSTEM === 't' ? true : isSTEM === 'f' ? false : null

  // Apply filtering logic
  const filteredMembers = members.filter(member => {
    const matchesDegree = degree ? member.degree === degree : true
    const matchesCollege = college ? member.college === college : true
    const matchesIsSTEM = isSTEMFilter !== null ? member.is_stem === isSTEMFilter : true

    return matchesDegree && matchesCollege && matchesIsSTEM
  })

  return (
    <div>
      {/* Filters */}
      <div className="flex justify-center gap-4 mb-6 ">
        <select value={degree} onChange={e => setDegree(e.target.value)} className="border p-2 rounded">
          <option value="">All Degrees</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
        </select>

        <select value={college} onChange={e => setCollege(e.target.value)} className="border p-2 rounded">
          <option value="">All Colleges</option>
          <option value="College of Systems & Society">College of Systems & Society</option>
          <option value="College of Law, Governance & Policy">College of Law, Governance & Policy</option>
          <option value="College of Science & Medicine">College of Science & Medicine</option>
          <option value="College of Asia & the Pacific">College of Asia & the Pacific</option>
          <option value="College of Arts & Social Sciences">College of Arts & Social Sciences</option>
          <option value="College of Business & Economics">College of Business & Economics</option>     
        </select>

        <select value={isSTEM} onChange={e => setIsStem(e.target.value)} className="border p-2 rounded">
          <option value="">All Fields</option>
          <option value="t">STEM</option>
          <option value="f">Non-STEM</option>
        </select>
      </div>

      {/* Display a message if no members match the filters */}
      {filteredMembers.length === 0 && (
        <p className="text-gray-500 text-center">No members match the selected filters.</p>
      )}

      {/* Filtered Members List */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
        {filteredMembers.map((member, index) => (
          <div key={member.uni_id}>
            <Reveal>
              <MemberCard 
                color={index % 2 === 0 ? 'blue' : 'orange'} 
                uni_id={member.uni_id} 
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
