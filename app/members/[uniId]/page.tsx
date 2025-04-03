import fetchMember from '@/lib//members/fetchMember'
import MemberProfile from '@/components/members/MemberProfile'

export default async function MemberPage({ params }: { params: { uniId: string } }) {
  const member = await fetchMember(params.uniId)

  if (!member) return <p>Member not found</p>

  return <MemberProfile {...member} />
}
