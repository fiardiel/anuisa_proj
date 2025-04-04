'use server'

import { supabase } from '@/lib/supabaseClient'
import type { Member } from '@/types/Member'

interface RawMember {
  invalid_photo: string;
  identifier: string;
  full_name: string;
  program: string;
  college: string;
  degree: string;
  is_stem: boolean;
}

const fetchMembers = async (): Promise<Member[]> => {
  const { data, error } = await supabase
    .from('profile')
    .select('identifier, full_name, program, college, degree, is_stem, invalid_photo')
    .order('full_name', { ascending: true })

  if (error) {
    console.error(error)
    return []
  }

  if (!data) return []

  return data.map((member: RawMember) => ({
    identifier: member.identifier,
    full_name: member.full_name,
    program: member.program,
    college: member.college,
    degree: member.degree,
    is_stem: member.is_stem,
    profile_picture_url: member.invalid_photo
    ? '/0Z.png' 
    : `https://qcjsnfklkapuequkkdvh.supabase.co/storage/v1/object/public/anuisa-profile-pictures/photos/${member.identifier}.png`,
  }))
}

export default fetchMembers

