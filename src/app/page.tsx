import Image from 'next/image'
import { Inter } from 'next/font/google'
import { space } from 'postcss/lib/list';


const inter = Inter ({subsets: ['latin']}); 
export default function Home() {
  return (
    <div className='relative h-full lg:h-[140vh]'>
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg-pb-12'>
        <div className='absolute left-0 top-0 -z-10 flex flex-col h-[95vh] w-screen bg-yellow-500'></div>

        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          Sócios indicam Alugue Já

        </h1>
        </div>
      </main>
    </div>
  )
}
