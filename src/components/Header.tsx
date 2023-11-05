import React , { useEffect ,useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrooled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 ) {
        setIsScrooled(true);
      } else{
        setIsScrooled(false);
      }
    }; 

    window.addEventListener('scroll' , handleScroll); 
    return () => {
      window.removeEventListener('scroll' , handleScroll);
    };
  } , []);
  return (
    <header className='fixed top-0 z-50 flex w-full items-center justify-between transition-all px-4 py-4 lg:px-10 lg:py-6'>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <img src='/logo_socio.svg' alt='logo socio' width={80} height={80} />
        <ul className='hidden md:flex md:space-x-4'>
          <li>Cadastre seu acervo</li>
          <li>Aluguel um jogo</li>
          <li>Quem Somos</li>
          <li>Contato</li>
          <li>Nosso Blog</li>
        </ul>
      </div>
      <div className='flex items-center md:space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>UserAvatar</p>
        <img src='https://rb.gy/g1pwyx' alt=''className='cursor-pointer rounded' />
      </div>
    </header>
  )
}

