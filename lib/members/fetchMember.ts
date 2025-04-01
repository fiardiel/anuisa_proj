'use server'

import { supabase } from '@/lib/supabaseClient'
import type { MemberProfileProps } from '@/components/members/MemberProfile'

const fetchMember = async (uniId: string): Promise<MemberProfileProps | null> => {
  try {
    // Fetch the member profile
    const { data: profileData, error: profileError } = await supabase
      .from('profile')
      .select('full_name, nickname, uni_id, program, school, college, other_degrees, career_interests, expertise, email, instagram, linkedin, bio')
      .eq('uni_id', uniId)
      .single()

    if (profileError) throw profileError
    if (!profileData) return null

    // Fetch only the "research" field from the research_project table
    const { data: researchData, error: researchError } = await supabase
      .from('research_project')
      .select('research')
      .eq('researcher', uniId)

    if (researchError) throw researchError

    return {
      name: profileData.full_name,
      nickname: profileData.nickname,
      uniId: profileData.uni_id,
      degree: profileData.program,
      school: profileData.school,
      college: profileData.college,
      other_programs: profileData.other_degrees,
      interests: profileData.career_interests,
      expertise: profileData.expertise,
      email: profileData.email,
      instagram: profileData.instagram || '',
      linkedin: profileData.linkedin || '',
      bio: profileData.bio,
      research_projects: researchData.map((r) => r.research), 
      profilePictureUrl: `https://qcjsnfklkapuequkkdvh.supabase.co/storage/v1/object/public/anuisa-profile-pictures/${profileData.uni_id}.png`,
    }
  } catch (err) {
    console.error('Error fetching member:', err)
    return null
  }
}

export default fetchMember
