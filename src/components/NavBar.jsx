
import NavBarIcon from "../../public/Icons/navIcon1.png"
import polygon from "../../public/Icons/Polygon 2.png"

const NavBar = () => {
    return (
        <div className='z-0 flex h-16 w-full items-center justify-between px-10 border-b bg-white border-b-slate-300'>
            <div className='flex items-center gap-3 cursor-pointer ' >
                <p className='text-[15px]'>Payments</p>
                <p className='flex text-[#4D4D4D]  items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-[12.6px] h-[12.6px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                    <span className='text-[12px]'> How it works</span></p>
            </div>
            <div className='relative w-[400px] h-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6 absolute translate-x-1 translate-y-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="search" placeholder='Search features, tutorials, etc.' className='text-[15px] pl-10  w-full h-full bg-[#F2F2F2] rounded-md focus:outline-none' />
            </div>
            <div className='flex gap-3'>
                <div className='bg-[#E6E6E6] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                    <img src={ NavBarIcon } alt="" className=' w-[20px] h-[20px] ' />

                </div>
                <div className='bg-[#E6E6E6] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                    <img src={ polygon } alt="" className=' w-[20px] h-[20px] ' />
                </div>

            </div>
        </div>
    )
}

export default NavBar
