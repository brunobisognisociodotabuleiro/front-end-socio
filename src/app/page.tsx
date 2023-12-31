import Image from 'next/image';
import { Inter } from 'next/font/google';
import { space } from 'postcss/lib/list';
import Header from '../components/Header';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { PlayIcon } from '@heroicons/react/24/solid';


const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden h-14 bg-gradient-to-b from bg-purple-600 to bg-purple-800 lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg-pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex flex-col h-[95vh] w-screen bg-yellow-600'>
            {/*
            <Image
              src='/6.jpg'
              alt='banner image'
              fill={true}
              className='object-cover object-top lg:h-[vh]' />
*/}
          </div>

          <h1 className='text-2xl font-bold md:text-2xl lg:text-7xl text-yellow-500'>
            Alugue Já
          </h1>
        </div>
        <div className='flex space-x-3 h-10'>
          <button className='
      bg-yellow-500
      text-purple-800
      md:flex-xl; flex cursor-pointer items-center gap-2 rounded bg-fuchia-800
      px-4 py-2 text-sm font-semibold transition-opacity-75 md:px-10 md:py-2.5'>
            <PlayIcon className='h-6' />
            Play
          </button>
          <button className='
      bg-yellow-500
      text-purple-800
      md:flex-xl; flex cursor-pointer items-center gap-2 rounded bg-fuchia-800
      px-5 py-1.5 text-sm font-semibold transition-opacity-75 md:px-8 md:py-2.5'>
            <InformationCircleIcon className='h-6' />
            Saiba mais</button>
            </div>
         <div className='flex col space-y-4'>
          <div className='flex space-x-4 overflow-x-scroll'>
              {[15].map((index) => (
                <div key={index} className=' group relative h-28 min-w-[200px]
                trannsform transition duration-200 ease-in hover:z-50 houver:scale-110 sm:h-36'>
                  <Image
                  src={`/item_${index}.jpg`}
                  fill={true}
                  alt='banner'
                  className='rounded'
                  />
                </div>
              ))}
            </div>
            </div>
            </main>
          </div>
  );
}
