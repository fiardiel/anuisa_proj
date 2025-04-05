"use client";

import React from "react";
import Image from "next/image";
import ProfileImage from "../ui/ProfileImage";

export interface MemberImageProps {
    name: string;
    email: string;
    instagram?: string;
    linkedin?: string;
    profilePictureUrl?: string;
  }

const MemberImage: React.FC<MemberImageProps> = ({
    name,
    email,
    instagram,
    linkedin,
    profilePictureUrl,
  }) => {
    return (
        <div className={`flex flex-col sm:flex-row bg-black p-4 rounded-none text-white w-full items-center sm:items-start justify-center py-20 gap-6`}>
            {/* Image Section: Stays centered on small screens */}
            
            <div className="w-3/5 sm:w-2/5 flex items-center justify-center ml-0 sm:ml-36">
                {profilePictureUrl ? (
                    <ProfileImage
                        profilePictureUrl={profilePictureUrl}
                        name={name}
                        width={300}
                        height={300}
                        className="rounded-none" 
                    />
                ) : (
                    <div className="w-[150px] h-[150px] bg-gray-300 rounded-lg flex items-center justify-center">
                        No Image
                    </div>
                )}
            </div>
           

            {/* Info Section: Adjusts width and text alignment */}
            <div className="w-4/5 sm:w-3/5 lg:w-2/5 flex flex-col items-center sm:items-start justify-start h-full pt-0 mx-6 sm:mr-20 overflow-visible text-center sm:text-left">
                <h2 className="text-4xl sm:text-6xl font-bold">{name}</h2>

                {/* Contact Links */}
                <div className="mt-4">
                    <p className="mt-2 text-xl sm:text-2xl wrap">{email}</p>
                    <div className="flex gap-4 mt-2 rounded-lg justify-center sm:justify-start">
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <Image src="/Instagram-Icon.png" alt="Instagram" width={50} height={50} />
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <Image src="/LinkedIn-Icon.png" alt="LinkedIn" width={50} height={50} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </div>

    );
  };

  export default MemberImage;