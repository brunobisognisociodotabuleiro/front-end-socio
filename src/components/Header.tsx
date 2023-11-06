import React from "react"

export default function Header(){
  return (
      <header className="fixed top-10 z-50 flex w-full 
      items-center justify-between px-4 py-4 lg:px-10 lg:py-10 transition-all">
        <div className="flex items-center space-x-2 md:space-x-8">
        <img src="/logo_socio.svg" alt="logo" width={100} height={100}/>
        <ul className="hidden md:flex md:space-x-4">
          <li>Quem Somos</li>
          <li>Seja Sócio</li>
          <li>Alugue</li>
          <li>Como Funciona</li>
          <li>Contato</li>
        </ul>
        </div>
        <p className="hidden cursor-not-allowed lg:inline  px-4">Profile</p>
        <img src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded"/>
      </header>
  );
};