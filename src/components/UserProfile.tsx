import Image from "next/image";
import React from "react";

export const UserProfile = () => (
  <div className="flex items-center space-x-4">
    <p className="hidden cursor-not-allowed lg:inline">Sócio</p>
    <Image
      src="/Perfil.jpg"
      alt="profile"
      width={40}
      height={40}
      className="rounded-full cursor-pointer" />

  </div>
);
