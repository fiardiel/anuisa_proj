import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-10">
      <div className="mt-20">
        <p className="text-5xl font-semibold">
          Australian National University
        </p>
        <p className="text-5xl font-semibold">
          Indonesian Students Association
        </p>
        <p className="mt-5 w-3/5">
          The Australian National University Indonesian Students' Association (ANUISA) is a student-led organization
          that serves as a home for Indonesian students at the Australian National University (ANU). It aims to foster
          a strong sense of community among Indonesian students while also promoting Indonesian culture and heritage
          within the broader ANU community.
        </p>
        <div className="mt-20">
          <button className="bg-[#f29727] text-black font-semibold py-3 px-5 rounded-full">
            About us
          </button>
        </div>
      </div>
    </div>
  );
}
