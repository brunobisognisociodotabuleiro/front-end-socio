import React from 'react'

export default function Header () {
  return (
    <header 
    className='
    fixed
    top-0
    z-50
    flex
    w-full
    items-center
    justify-between
    px-4
    py-4

    lg:px-10
    lg:py-6
    '>
      <div className='
      flex 
      items-center 
      space-x-2

      md:space-x-8
      
      '>
      <img src='/logo_socio.svg' alt='logo socio' width={80} height={80}/>
      <ul className='hidden md:flex md:space-x-4'>
        <li>Cadastre seu acervo</li>
        <li>Aluguel um jogo</li>
        <li>Quem Somos</li>
        <li>Contato</li>
        <li>Nosso Blog</li>
      </ul>
      </div>
    </header>
  )
}

