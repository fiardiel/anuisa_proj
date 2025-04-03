"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export interface MembersDescriptionProps {
    nickname: string;
    uniId: string;
    degree: string;
    school: string;
    college: string;
    other_programs: string;
    interests: string;
    expertise: string;
    bio: string;
    research_projects: string[]; // Array of research titles
  }

const MembersDescription: React.FC<MembersDescriptionProps> = ({
    nickname,
    uniId,
    degree,
    school,
    college,
    other_programs,
    interests,
    expertise,
    bio,
    research_projects,
  }) => {
    return (
      <div className="w-3/4 items-center justify-center mx-auto ">
        {/* Biography Directly Below (Fixes White Space Issue) */}
        <div className={`p-8 bg-white text-black`}>
          <h3 className="text-xl font-bold">Biography</h3>
          <p className="text-md mt-2">
            {bio}
          </p>
        </div>

        <div className="w-2/3 flex flex-col justify-between p-8 bg-white text-black">
          <div>
            <p className="text-lg font-semibold">{`(${nickname}) - ${uniId}`}</p>
            <p className="text-md font-semibold">{college}</p>
            <div className="flex gap-2 mt-2">
            <p className="text-md font-semibold">{degree}</p>
            <span></span> {/* Divider */}
            <p className="text-md font-semibold">{school}</p>
          </div>
            <p className="text-md">{other_programs}</p>
            <p className="text-md font-semibold mt-2">
              <strong>Career Interests:</strong> {interests}
            </p>
            <p className="text-md font-semibold">
              <strong>Area of Expertise:</strong> {expertise}
            </p>
          </div>
        </div>

        <div className={`p-8 bg-white text-black rounded-b-lg shadow-md`}>
            <h3 className="text-xl font-bold">Research Projects</h3>
            {research_projects.length > 0 ? (
                <ol className="mt-2 space-y-3 list-decimal list-inside">
                {research_projects.map((research, index) => (
                    <li key={index} className="text-md">{research}</li>
                ))}
                </ol>
            ) : (
                <p className="italic text-gray-300">No research projects listed.</p>
            )}
        </div>
      </div>
    );
  };
  

export default MembersDescription;