import React from 'react'
import { Table } from './Table'

import Pagination from '@mui/material/Pagination';
import sort from "../../public/Icons/sort.png"
import download from "../../public/Icons/Combined Shape.png"


const MainSection = () => {
    const [currentPage, setCurrentPage] = React.useState(1)
    return (

        <div className=' flex flex-col mt-5 max-w-[1152px] justify-center    '>
            <div className='flex justify-between mb-5'>
                <h1 className='font-medium text-[20px] '>Overview</h1>
                <div className='flex border text-[16px] bg-white border-[#D9D9D9] p-1 rounded py-[6px] pl-[14px]'>
                    <button className='text-[#4D4D4D]'>Last Month
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

            </div>
            <div className='flex justify-center gap-5 mb-[20px] '>

                <div className='bg-white rounded-lg w-[526px] p-5 h-[118px] shadow-sm gap-4'>
                    <p className='text-[16px] text-[#4D4D4D]'>Online orders</p>
                    <h1 className='font-bold text-[32px]'>231</h1>
                </div>

                <div className='bg-white rounded-lg w-[526px] p-5 gap-4 h-[118px] shadow-sm'>
                    <p className='text-[16px] text-[#4D4D4D]'>Amount received</p>
                    <h1 className='font-bold text-[32px]'>₹23,92,312.19</h1>
                </div>
            </div>
            <h1 className='text-[20px] font-medium m-5'>Transactions | This Month </h1>
            <div className='bg-white '>
                <div className='flex justify-between p-5'>
                    <div className='relative w-[248px] h-10 border border-[D9D9D9] rounded '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-[14px] h-[14px] absolute translate-x-1 translate-y-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="search" placeholder='Search by order ID...' className='text-[14px] pl-10  w-full h-full  rounded-md focus:outline-none' />
                    </div>
                    <div className='flex items-center gap-3 '>
                        <p className='text-[16px] flex items-center border border-[#D9D9D9] px-3 py-[6px] gap-[6px]'>Sort <img src={ sort } alt="" className='w-[13.07px] h-[10.97px]' /></p>
                        <div className='border border-[#D9D9D9] p-2'>
                            <img src={ download } alt="" className='w-5 h-5 ' />
                        </div>
                    </div>
                </div>
                <Table />
                <div className='flex items-center gap-[24px] justify-center pb-5 bg-white mt-[24px]'>
                    <div className='flex gap-x-4  py-[6px] pr-[12px] pl-[6px] rounded-md items-center border border-[D9D9D9]' onClick={ () => { if (currentPage > 1) setCurrentPage(currentPage - 1) } }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-[18px] rotate-90 h-[18px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        <button >     Previous</button>
                    </div>
                    <Pagination
                        hideNextButton
                        hidePrevButton
                        sx={ {
                            "& .MuiPaginationItem-root": {
                                color: "#000",
                                // border: "1px solid #372F4E",
                                borderRadius: "8px",
                                margin: "0px 6px",
                            },
                            "& .MuiPaginationItem-root.Mui-selected": {
                                backgroundColor: "#146EB4",
                                border: "none",
                            },

                        } }
                        count={ 18 }
                        page={ currentPage }
                    //  onChange={ handleChange }
                    />
                    <div className='flex gap-x-4 py-[6px] pl-[12px] pr-[6px] rounded-md items-center border border-[D9D9D9] ' onClick={ () => { if (currentPage < 18) setCurrentPage(currentPage + 1) } }>
                        <button>Next</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-[18px] -rotate-90 h-[18px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MainSection
