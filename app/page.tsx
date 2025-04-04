import MemberList from "@/components/members/MemberList";
import fetchMembers from "@/lib/members/fetchMembers";


export default async function Home() {
  const members = await fetchMembers()
  return (
    <div>
      <div className="mt-20 px-10 py-5">
        <div className="ml-10">
          <p className="text-5xl font-normal">
            Australian National University
          </p>
          <p className="text-5xl font-bold text-[#BF872B]">
            Indonesian Students Association
          </p>
          <p className="mt-10 lg:w-3/5 w-4/5 text-2xl">
            Through this platform, <span className="text-[#BF872B] font-bold italic">ANUISA</span> seeks to connect Indonesian talents within the ANU community to industry and beyond, while fostering employability and idea exchange.
          </p>
        </div>
        <div className='p-0 mt-36'>
          <div className="relative flex items-center justify-center w-full">
            <hr className="w-full h-1.5 my-8 bg-[#bf872b] border-0 rounded-sm dark:bg-gray-700" />
            <div className="absolute px-4 bg-white dark:bg-gray-900">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center whitespace-normal">
                Meet Indonesian Talents at ANU
              </h1>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <MemberList members={members} />
          </div>
        </div>
      </div>
    </div>
  );
}
