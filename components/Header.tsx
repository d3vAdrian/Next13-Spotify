"use client"

import { useRouter } from "next/navigation";
import {twMerge} from 'tailwind-merge'
import {RxCaretLeft,RxCaretRight} from 'react-icons/rx'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Button from './Button'


interface HeaderProps {
  children:React.ReactNode;
  className?:string;
}
const Header: React.FC<HeaderProps> = ({children,className}) => {
  const router =useRouter();
  const handleLogout=()=>{

  }
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-blue-900 p-6`,className)}>
      <div className="w-full mb-4 items-center justify-between flex">
        <div className="hidden md:flex gap-x-2 items-center">
          <button onClick={()=>router.back()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft className="text-white" size={32}/>
          </button>
          <button  onClick={()=>router.forward()}className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight className="text-white" size={32}/>
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className='text-black' size={26}/>
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className='text-black' size={26}/>
          </button>
        </div>
        <div className="flex justify-between item-center gap-x-5">
          <>
            <Button className="bg-transparent text-neutral-300 font-medium">Sign up</Button>
            <Button className="bg-white px-6 py-2">Log in</Button>
          </>
        </div>
      </div>
      {children}
      </div>
  )
}

export default Header