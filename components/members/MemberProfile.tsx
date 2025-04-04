"use client";

import React from "react";
import MembersImage from '@/components/members/MembersImage'
import MembersDescription from '@/components/members/MembersDescription'

export interface MemberProfileProps {
    name: string;
    nickname: string;
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
    research_projects: string[]; // Array of research titles
    profilePictureUrl?: string;
}

const MemberProfile: React.FC<MemberProfileProps> = ({
    name,
    nickname,
    degree,
    school,
    other_programs,
    interests,
    expertise,
    email,
    instagram,
    linkedin,
    bio,
    research_projects,
    profilePictureUrl,
}) => {
    return (
        <div className="w-full">
            <MembersImage
                name={name}
                email={email}
                instagram={instagram}
                linkedin={linkedin}
                profilePictureUrl={profilePictureUrl}
            />

            <MembersDescription
                nickname={nickname}
                name={name}
                degree={degree}
                school={school}
                other_programs={other_programs}
                interests={interests}
                expertise={expertise}
                bio={bio}
                research_projects={research_projects}
            />

        </div>
    );
};


export default MemberProfile;
