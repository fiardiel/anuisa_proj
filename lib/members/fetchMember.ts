'use server'

import { supabase } from '@/lib/supabaseClient'
import type { MemberProfileProps } from '@/components//members/MemberProfile'

const fetchMember = async (uniId: string): Promise<MemberProfileProps | null> => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('full_name, nickname, uni_id, program, school, college, other_degrees, career_interests, expertise, email, instagram, linkedin, bio, research_project')
      .eq('uni_id', uniId)
      .single() // Fetch a single record

    if (error) throw error

    if (!data) return null

    return {
      name: data.full_name,
      nickname: data.nickname,
      uniId: data.uni_id,
      degree: data.program,
      school: data.school,
      college: data.college,
      other_programs: data.other_degrees,
      interests: data.career_interests,
      expertise: data.expertise,
      email: data.email,
      instagram: data.instagram || '',
      linkedin: data.linkedin || '',
      bio: data.bio,
      research_project: data.research_project,
      profilePictureUrl: `https://qcjsnfklkapuequkkdvh.supabase.co/storage/v1/object/public/anuisa-profile-pictures/${data.uni_id}.png`,
    }
  } catch (err) {
    console.error('Error fetching member:', err)
    return null
  }
}

export default fetchMember
