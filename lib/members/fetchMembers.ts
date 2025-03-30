'use server'

import { supabase } from '@/lib/supabaseClient'
import type { Member } from '@/types/Member'

interface RawMember {
  uni_id: string
}

const fetchMembers = async (): Promise<Member[]> => {
  const { data, error } = await supabase
    .from('profile')
    .select('uni_id')

  if (error) {
    console.error(error)
    return []
  }

  if (!data) return []

  return data.map((member: RawMember) => ({
    uni_id: member.uni_id,
    profile_picture_url: `https://qcjsnfklkapuequkkdvh.supabase.co/storage/v1/object/public/anuisa-profile-pictures/${member.uni_id}.png`,
  }))
}

export default fetchMembers

