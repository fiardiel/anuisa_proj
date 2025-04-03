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
        <div className={`flex ${bgColor} p-8 rounded-none text-white w-full items-start justify-center py-20`}>
            {/* Image Section: Allow it to be tall but maintain aspect ratio */}
            <div className="w-2/5 flex items-center justify-center ">
                {profilePictureUrl ? (
                <Image
                    src={profilePictureUrl}
                    alt={name}
                    width={250}
                    height={250}
                    className="rounded-none"
                    unoptimized 
                />
                ) : (
                <div className="w-[150px] h-[150px] bg-gray-300 rounded-lg flex items-center justify-center">
                    No Image
                </div>
                )}
            </div>
    
            {/* Info Section */}
            <div className="w-2/5 flex flex-col items-start justify-start h-full pt-4">
                <h2 className="text-4xl font-bold">{name}</h2>                

                {/* Contact Links */}
                <div className="mt-4">
                    <p className="mt-2">{email}</p>
                    <div className="flex gap-3 mt-2">
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <Image src="/icons8-instagram-50.png" alt="Instagram" width={24} height={24} />
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <Image src="/icons8-linkedin-50.png" alt="LinkedIn" width={24} height={24} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
  };

  export default MemberImage;