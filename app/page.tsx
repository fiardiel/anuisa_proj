import MemberList from "@/components/members/MemberList";
import fetchMembers from "@/lib/members/fetchMembers";
import Image from "next/image";
export const revalidate = 0;

export default async function Home() {
  const members = await fetchMembers()
  return (
    <div>
      <div className="relative">
        <Image
          src="/anuisa_home.JPG"
          alt="background"
          height={1080}
          width={1920}
          className="h-[250px] md:h-[600px] object-cover"
        />
        <div className="absolute w-full md:hidden left-0 top-1/2 -translate-y-1/2 h-full px-10 bg-neutral-800/30 backdrop-blur-sm flex flex-col justify-center">
          <div>
            <p className="text-2xl sm:text-3xl font-normal text-white">
              Australian National University
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              Indonesian Students Association
            </p>
          </div>
        </div>
        <div className="hidden md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:h-full px-20 bg-neutral-800/30 md:backdrop-blur-sm md:flex flex-col justify-center">
          <div>
            <p className="text-5xl font-normal text-white">
              Australian National University
            </p>
            <p className="text-5xl font-bold text-white">
              Indonesian Students Association
            </p>
          </div>
          <p className="mt-10 lg:w-3/5 w-4/5 text-2xl text-white">
            Through this platform, <span className="text-[#BF872B] font-bold italic">ANUISA</span> seeks to connect Indonesian talents within the ANU community to industry and beyond, while fostering employability and idea exchange.
          </p>
        </div>
      </div>
      <div className="flex md:hidden bg-black py-7 px-10">
        <p className="text-white">
          Through this platform, <span className="text-[#BF872B] font-bold italic">ANUISA</span> seeks to connect Indonesian talents within the ANU community to industry and beyond, while fostering employability and idea exchange.
        </p>
      </div>
      <div className="px-10 py-5">
        <div className='p-0 mt-10'>
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
