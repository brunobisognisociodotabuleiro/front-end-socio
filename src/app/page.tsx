import Image from 'next/image';
import { Inter } from 'next/font/google';
import { space } from 'postcss/lib/list';
import Header from '../components/Header';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { PlayIcon } from '@heroicons/react/24/solid';


const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        <div className='flex flex-col py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg-pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex flex-col h-[95vh] w-screen bg-yellow-500'>
{/*
            <Image
              src='/6.jpg'
              alt='banner image'
              fill={true}
              className='object-cover object-top lg:h-[vh]' />
*/} 
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl text-purple-800'>
            Alugue Já
          </h1>
        </div>
        <div className='flex space-x-3 h-10'>
      <button className='
      bg-fuchsia-800
      text-yellow-500
      md:flex-xl; flex cursor-pointer items-center gap-2 rounded bg-fuchia-800
      px-4 py-2 text-sm font-semibold transition-opacity-75 md:px-10 md:py-2.5'>
      <PlayIcon className='h-6'/>
      
      Play
            </button>
        <button className='
      bg-purple-800
      text-yellow-500
      md:flex-xl; flex cursor-pointer items-center gap-2 rounded bg-fuchia-800
      px-5 py-1.5 text-sm font-semibold transition-opacity-75 md:px-8 md:py-2.5'>
      Saiba mais</button>
        </div>
      </main>
    </div>
   
  );
}
