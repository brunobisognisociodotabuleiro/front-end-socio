import Image from "next/image";
import React from "react";

export const UserProfile = () => (
  <div className="flex items-center space-x-4">
    <p className="hidden cursor-not-allowed lg:inline  text-yellow-400">Sócio</p>
    <Image
      src="/perfil.jpg"
      alt="profile"
      width={40}
      height={40}
      className="rounded-full cursor-pointer" />

  </div>
);
