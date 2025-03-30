'use server'

import { supabase } from '@/lib/supabaseClient'
import type { Member } from '@/types/Member'

interface RawMember {
  uni_id: string;
  full_name: string;
  program: string;
}

const fetchMembers = async (): Promise<Member[]> => {
  const { data, error } = await supabase
    .from('profile')
    .select('uni_id, full_name, program')

  if (error) {
    console.error(error)
    return []
  }

  if (!data) return []

  return data.map((member: RawMember) => ({
    uni_id: member.uni_id,
    full_name: member.full_name,
    program: member.program,
    profile_picture_url: `https://qcjsnfklkapuequkkdvh.supabase.co/storage/v1/object/public/anuisa-profile-pictures/${member.uni_id}.png`,
  }))
}

export default fetchMembers

