import MemberList from "@/components/members/MemberList";
import fetchMembers from "@/lib/members/fetchMembers";


export default async function Home() {
  const members = await fetchMembers()
  return (
    <div className="p-10">
      <div className="mt-20">
        <p className="text-5xl font-semibold">
          Australian National University
        </p>
        <p className="text-5xl font-semibold">
          Indonesian Students Association
        </p>
        <p className="mt-5 w-3/5 text-2xl">
          Through this platform, ANUISA seeks to connect Indonesian talents within the ANU community to industry and beyond, while fostering employability and idea exchange.
        </p>
        <div className="mt-20">
        </div>
        <div className='p-10 mt-10'>
        <div className="relative flex items-center justify-center w-full">
          <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
          <div className="absolute px-4 bg-white dark:bg-gray-900">
              <h1 className="text-5xl font-semibold whitespace-nowrap">
          Meet Indonesian Talents at ANU
              </h1>
          </div>
        </div>
            <div>
              <MemberList members={members} />
            </div>
          </div>
        </div>
      </div>
  );
}
