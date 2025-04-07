import Image from "next/image";

export const revalidate = 0;

export default function About() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/anuisa_aboutus.jpeg"
          alt="About us background"
          height={1080}
          width={1920}
          className="h-[250px] md:h-[600px] object-cover"
        />
        {/* Mobile content */}
        <div className="absolute max-h-full overflow-y-auto w-full md:hidden left-0 top-1/2 -translate-y-1/2 h-full px-10 bg-neutral-800/30 backdrop-blur-sm flex flex-col justify-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              About ANUISA
            </p>
          </div>
        </div>
        <div className="hidden w-full md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:h-full px-20 bg-neutral-800/30 md:backdrop-blur-sm md:flex flex-col justify-center">
          <div>
            <p className="text-5xl font-bold text-white">About ANUISA</p>
            
          </div>
        </div>
      </div>

      <div className="flex bg-black py-7 px-10">
        <p className="text-white">
            <span className="text-[#BF872B] font-bold">ANUISA (ANU Indonesian Students&apos; Association)</span> is a student-led organization at the Australian National University (ANU) that serves as a community for Indonesian students and anyone interested in Indonesian culture, society, and issues. ANUISA provides a platform for students to connect, support each other, and celebrate Indonesia&apos;s rich traditions while also fostering academic and professional development.
        </p>
      </div>
        
      <div className="flex bg-black py-7 pt-0 px-10">
        <p className="text-white">
            ANUISA organizes various academic, cultural, and social events throughout the year, including networking sessions, Indonesian cultural celebrations, discussion forums, and casual gatherings, creating a home away from home for Indonesian students. These events aim to strengthen ties among Indonesian students, introduce Indonesian culture to the wider ANU community, and provide support for students navigating university life abroad.
        </p>
      </div>

      {/* Our Mission section */}
      <div className="px-10 py-10">
        <div className="relative flex items-center justify-center w-full">
          <hr className="w-full h-1.5 my-8 bg-[#bf872b] border-0 rounded-sm dark:bg-gray-700" />
          <div className="absolute px-4 bg-white dark:bg-gray-900">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center whitespace-normal">
              Our Mission & Values
            </h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-lg md:text-xl text-gray-800 dark:text-gray-200 mt-8 space-y-6">
          <p>
          Beyond social and cultural activities, <span className="text-[#BF872B] font-bold">ANUISA</span> also facilitates collaboration and idea-sharing among students with diverse backgrounds, experiences, and interests, particularly in professional and career development.
          </p>
          <p>
          Through networking events and panel discussions, <span className="text-[#BF872B] font-bold">ANUISA</span> helps students exchange insights on different industries, career paths, and academic pursuits.
          </p>
          <p>
          The organization also collaborates with other student organizations, the Indonesian embassy, and professional networks to offer career development opportunities, academic discussions, and advocacy for Indonesian students.
          </p>
          <p>
          Whether you&apos;re an Indonesian student at ANU or simply passionate about Indonesia, <span className="text-[#BF872B] font-bold">ANUISA</span> welcomes everyone to be part of this vibrant and inclusive community!
          </p>
        </div>
      </div>
    </div>
  );
}
