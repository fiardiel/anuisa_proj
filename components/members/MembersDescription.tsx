"use client";

import React from "react";
import Reveal from "../utils/Reveal";

export interface MembersDescriptionProps {
  nickname: string;
  name: string;
  degree: string;
  school: string;
  other_programs: string;
  interests: string;
  expertise: string;
  bio: string;
  research_projects: string[]; // Array of research titles
}

const MembersDescription: React.FC<MembersDescriptionProps> = ({
  nickname,
  name,
  degree,
  school,
  other_programs,
  interests,
  expertise,
  bio,
  research_projects,
}) => {
  return (
    <div className="w-4/5 md:w-3/5 items-center justify-center mx-auto ">
      {/* Biography Directly Below (Fixes White Space Issue) */}
      <Reveal className="h-full">
        <div className={`p-8 bg-white text-black`}>
          <h3 className="text-4xl font-bold">Biography</h3>
          <p className="text-xl mt-4">
            {bio}
          </p>
        </div>
      </Reveal>
      
      <Reveal className="h-full">
      <div className="flex flex-col justify-between p-8 bg-white text-black">
        <h3 className="text-4xl font-bold mb-4">Profile</h3>
        <div>
        <p className="text-2xl ">{name} <strong> ({nickname})</strong></p>
          <p className="text-2xl font-semibold mt-3"> Education </p>
          <p className="text-xl mt-1">1. {degree}, {school}</p>
          {other_programs ?
            <p className="text-xl mt-1">2. {other_programs}</p> : null
          }
          <p className="text-2xl font-semibold mt-3"> Career Interests </p>
          <p className="text-xl">{interests}</p>
          <p className="text-2xl font-semibold mt-3"> Area of Expertise </p>
          <p className="text-xl">{expertise}</p>
        </div>
      </div>
      </Reveal>
      
      <Reveal className="h-full">
      <div className={`p-8 bg-white text-black rounded-b-lg`}>
        <h3 className="text-4xl font-bold mb-4">Research Projects</h3>
        {research_projects.length > 0 ? (
          <ol className="mt-2 space-y-3 list-decimal list-inside">
            {research_projects.map((research, index) => (
              <li key={index} className="text-xl">{research}</li>
            ))}
          </ol>
        ) : (
          <p className="italic text-gray-700">No research projects listed.</p>
        )}
      </div>
      </Reveal>
    </div>
  );
};


export default MembersDescription;
