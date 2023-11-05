import Image from 'next/image'
import { Inter } from 'next/font/google'
import { space } from 'postcss/lib/list';


const inter = Inter ({subsets: ['latin']}); 
export default function Home() {
  return (
    <div className='relative h-full lg:h-[140vh]'>
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg-pb-12'>
        <div className='absolute left-0 top-0 -z-10 flex flex-col h-[95vh] w-screen bg-yellow-500'>
          
        <Image
        src='/1.jpg'
        alt='banner image'
        fill={true}
        className='object-cover h-[65vh] lg:h-[95vh]'/>
        </div>

        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl text-yellow-500'>
        Alugue Já
        </h1>
        <p className='text-shadow-md max-w-xs text-xs md:max-w-lg lg:max-w-2xl  text-yellow-500'>
          Veja como é simples e rápido alugar esse jogo que nossa curadora Gabriela
          indicou como o jogo da semana. 
        </p>
        </div>
      
      <div className='flex space-x-3 '>

      <button className='
      bg-fuchsia-800
      text-yellow-500
      md:flex-xl; flex cursor-pointer items-center gap-2 rounded bg-fuchia-800
      px-5 py-1.5 text-sm font-semibold transition-opacity-75 md:px-8 md:py-2.5'>
      Play</button>

      <button className='
      bg-purple-800
      text-yellow-500
      md:flex-xl; flex cursor-pointer items-center gap-2 rounded bg-fuchia-800
      px-5 py-1.5 text-sm font-semibold transition-opacity-75 md:px-8 md:py-2.5'>
        Saiba mais</button>
      </div>
      </main>
    </div>
  )
}
