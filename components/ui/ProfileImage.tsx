"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfileImage({ profilePictureUrl, name, className, width, height }: { profilePictureUrl: string; name: string; className: string; width: number; height: number}) {
    const [imageError, setImageError] = useState(false);

    return (
        <Image
            src={imageError || !profilePictureUrl ? "/0Z.png" : profilePictureUrl}
            alt={name}
            width={width}
            height={height}
            className={className}
            unoptimized
            onError={() => setImageError(true)} 
        />
    );
}
