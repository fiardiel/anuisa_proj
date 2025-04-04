"use client";

import React from "react";
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
      <div className="w-4/5 md:w-3/5 items-center justify-center mx-auto ">
        {/* Biography Directly Below (Fixes White Space Issue) */}
        <div className={`p-8 bg-white text-black`}>
          <h3 className="text-2xl font-bold">Biography</h3>
          <p className="text-xl mt-4">
            {bio}
          </p>
        </div>

        <div className="flex flex-col justify-between p-8 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Profile</h3>
          <div>
            <p className="text-xl ">{`(${nickname}) - ${uniId}`}</p>
            <p className="text-xl ">{college}</p>
            <div className="flex gap-2 mt-2">
            <p className="text-xl ">{degree}</p>
            <span></span> {/* Divider */}
            <p className="text-xl ">{school}</p>
          </div>
            <p className="text-xl">{other_programs}</p>
            <p className="text-xl  mt-2">
              <strong>Career Interests:</strong> {interests}
            </p>
            <p className="text-xl ">
              <strong>Area of Expertise:</strong> {expertise}
            </p>
          </div>
        </div>

        <div className={`p-8 bg-white text-black rounded-b-lg`}>
            <h3 className="text-2xl font-bold mb-4">Research Projects</h3>
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
      </div>
    );
  };
  

export default MembersDescription;