import React from 'react'
import Image from 'next/image';
import {
    HeartIcon,
   MagnifyingGlassIcon,
   PaperAirplaneIcon,
   PlusCircleIcon,
   UserCircleIcon,
   UserGroupIcon
    
} from "@heroicons/react/24/outline";
import {HomeIcon} from "@heroicons/react/24/solid"
import {Bars4Icon} from "@heroicons/react/24/solid"
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';


 function Header() {
     const { data: session } = useSession();
     const [open, setOpen] = useRecoilState(modalState);
     const router = useRouter();

     
    

   return (
     <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
         <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
         {/*left*/}
         <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
             <Image src='https://links.papareact.com/ocw' 
             layout='fill' 
             objectFit='contain'
             />
         </div>

         <div onClick={() => router.push('/')} className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
             <Image src='https://links.papareact.com/jjm' 
             layout='fill' 
             objectFit='contain'
             />
         </div>

         {/*middle - search input */}
         <div className='max-w-xs'>
         <div className='relative mt-1 p-3 rounded-md'> 
             <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                <MagnifyingGlassIcon className='h-5 w-5 text-gray-500'/>
             </div>
             <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type='text' placeholder='Search'/>
         </div>
         </div>
         

         {/*right*/}
         <div className='flex items-center justify-end space-x-4'>
             <HomeIcon onClick={() => router.push('/')} className=' h-6 sm:hidden md:inline-flex cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 '/> 
             <Bars4Icon className='h-6 md:hidden cursor-pointer' /> 
             {session ? (
                 <>
                 <div className='relative transition cursor-pointer ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 '>
                 <PaperAirplaneIcon className='sm:hidden h-6 md:inline-flex cursor-pointer ' /> 
                 <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>6</div>  
                 </div>
                 
                 <PlusCircleIcon onClick={() => setOpen(true)} className='sm:hidden h-6 md:inline-flex cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'/>
                 <UserGroupIcon className='sm:hidden h-6 md:inline-flex cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'/>
                 <HeartIcon className='sm:hidden h-6 md:inline-flex cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'/>
                 <img onClick={signOut}src={session.user.image} alt='Profile pic' className='h-10 w-10 rounded-full cursor-pointer border p-[1.5px]'/>
                 </>
             ): (
                 <button onClick={signIn}>Sign in</button>

             )}
             
         </div>
             
         

         </div>
         
     </div>
   );
 }
 
 export default Header;