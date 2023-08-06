"use client"
import {TbPlaylist} from  'react-icons/tb';
import {AiOutlinePlus} from  'react-icons/ai';
import {BsArrowRightShort} from  'react-icons/bs';


interface LibraryProps{

}

const Library : React.FC<LibraryProps>=()=>{
    const onClick =()=>{

    }
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between pl-5 pt-4 gap-2">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400 " size={26}/>
                    <p className="text-neutral-400 font-medim tect-md">Your Library</p>
                </div>
                <div className="flex pr-3 justify-between gap-1">
                    <AiOutlinePlus
                        onClick={onClick}
                        size={20}
                        className="
                        hover:text-white
                         transition
                        text-neutral-400
                    "
                    />
                    <BsArrowRightShort
                        onClick={onClick}
                        size={20}
                        className="
                        hover:text-white
                        transition
                        text-neutral-400
                        "
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                    list of Song
            </div>
        </div>
    )
}
export default Library