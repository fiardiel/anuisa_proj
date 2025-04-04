import fetchMember from '@/lib//members/fetchMember'
import MemberProfile from '@/components/members/MemberProfile'

export const revalidate = 0;

export default async function MemberPage({ params }: { params: { identifier: string } }) {
  const member = await fetchMember(params.identifier)

  if (!member) return <p>Member not found</p>

  return <MemberProfile {...member} />
}
