// components/FilterControls.tsx
import React from 'react'

interface FilterControlsProps {
  degree: string
  setDegree: (val: string) => void
  college: string
  setCollege: (val: string) => void
  isSTEM: string
  setIsStem: (val: string) => void
}

const FilterControls: React.FC<FilterControlsProps> = ({
  degree,
  setDegree,
  college,
  setCollege,
  isSTEM,
  setIsStem
}) => (
  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
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
      <option value="true">STEM</option>
      <option value="false">Non-STEM</option>
    </select>
  </div>
)

export default FilterControls
