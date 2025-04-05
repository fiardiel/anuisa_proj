"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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
    const searchParams = useSearchParams();
    const color = searchParams.get("color") as "bg-black" | "bg-black" || "bg-black"; 

    const bgColor = color === "bg-black" ? "bg-black" : "bg-black";
    return (
        <div className={`flex flex-col sm:flex-row ${bgColor} p-4 rounded-none text-white w-full items-center sm:items-start justify-center py-20 gap-6`}>
            {/* Image Section: Stays centered on small screens */}
            
            <div className="w-3/5 sm:w-2/5 flex items-center justify-center ml-0 sm:ml-36">
                {profilePictureUrl ? (
                    <Image
                        src={profilePictureUrl}
                        alt={name}
                        width={300}
                        height={300}
                        className="rounded-none"
                        unoptimized 
                    />
                ) : (
                    <div className="w-[150px] h-[150px] bg-gray-300 rounded-lg flex items-center justify-center">
                        No Image
                    </div>
                )}
            </div>
           

            {/* Info Section: Adjusts width and text alignment */}
            <div className="w-4/5 sm:w-3/5 lg:w-2/5 flex flex-col items-center sm:items-start justify-start h-full pt-0 mx-6 sm:mr-20 overflow-visible text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold">{name}</h2>

                {/* Contact Links */}
                <div className="mt-4">
                    <p className="mt-2 wrap">{email}</p>
                    <div className="flex gap-4 mt-2 rounded-lg justify-center sm:justify-start">
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <Image src="/icons8-instagram.svg" alt="Instagram" width={24} height={24} />
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <Image src="/icons8-linkedin.svg" alt="LinkedIn" width={24} height={24} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </div>

    );
  };

  export default MemberImage;