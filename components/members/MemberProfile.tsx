import React from "react";
import Image from "next/image";

export interface MemberProfileProps {
  name: string;
  nickname: string;
  uniId: string;
  degree: string;
  school: string;
  college: string;
  other_programs: string;
  interests: string;
  expertise: string;
  email: string;
  instagram?: string;
  linkedin?: string;
  bio: string;
  research_project: string;
  profilePictureUrl?: string; // Make this optional to avoid crashes
}

const MemberProfile: React.FC<MemberProfileProps> = ({
    name,
    nickname,
    uniId,
    degree,
    school,
    college,
    other_programs,
    interests,
    expertise,
    email,
    instagram,
    linkedin,
    bio,
    research_project,
    profilePictureUrl,
  }) => {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Flex Container for Image + Info */}
        <div className="flex bg-[#2994b2] p-6 rounded-t-lg text-white">
          {/* Image Section: Allow it to be tall but maintain aspect ratio */}
          <div className="w-1/3 flex items-start">
          {profilePictureUrl ? (
            <Image
              src={profilePictureUrl}
              alt={name}
              width={250}
              height={250}
              className="rounded-lg"
              unoptimized // Important for external URLs
            />
          ) : (
            <div className="w-[150px] h-[150px] bg-gray-300 rounded-lg flex items-center justify-center">
              No Image
            </div>
          )}
          </div>
  
          {/* Info Section */}
          <div className="w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold">{name}</h2>
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
  
            {/* Contact Links */}
            <div className="mt-4">
              <p className="mt-2">{email}</p>
              <div className="flex gap-3 mt-2">
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
  
        {/* Biography Directly Below (Fixes White Space Issue) */}
        <div className="p-6 bg-[#2994b2] text-white -mt-2">
          <h3 className="text-xl font-bold">Biography</h3>
          <p className="text-md mt-2">
            {bio}
          </p>
        </div>

        <div className="p-6 bg-[#2994b2] text-white rounded-b-lg shadow-md">
        <h3 className="text-xl font-bold">Research Project</h3>
        <p className="text-md mt-2">{research_project || <span className="italic text-gray-600">No research project listed.</span>}</p>
      </div>
      </div>
    );
  };
  

export default MemberProfile;