import React from 'react'
import { Table } from './Table'

const MainSection = () => {
    return (
        <div className='bg-[#f4f4f4] px-10  '>
            <div className=' flex flex-col mt-5 gap-3'>
                <div className='flex justify-between mb-5'>
                    <h1 className='font-medium text-[20px] '>Overview</h1>
                    <div className='flex border text-[16px] border-[#D9D9D9] p-1 rounded'>
                        <button>This Month
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                </div>
                <div className='flex justify-center gap-2 '>
                    {/* <div className=' bg-[#146EB4] rounded-lg w-[370.67px] h-[154px] text-white'>
                        <div className='  p-5 '>

                            <div className='flex items-center text-[16px] font-medium'>
                                Next Payout
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-[14.4px] h-[14.4px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div className='flex items-center justify-between '>
                                <p className='text-[32px]'>2,312.23</p>
                                <p className='flex text-[16px] '>23 orders
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-2 -rotate-90 h-[14px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg></p>
                            </div>

                        </div>
                        <div className='bg-[#0E4F82] justify-between  items-center p-5 rounded-lg w-full flex  text-[#F2F2F2] text-[14px] h-9'>
                            <p>Next payout date:</p>
                            <p>Today ,O4:OOPM</p>
                        </div>
                    </div> */}
                    <div className='bg-white rounded-lg w-[566px] p-5 h-[118px]'>
                        <p>Online orders</p>
                        <h1 className='font-bold text-[24px]'>231</h1>
                    </div>

                    <div className='bg-white rounded-lg w-[566px] p-5 h-[118px]'>
                        <p>Amount received</p>
                        <h1 className='font-bold text-[24px]'>23,92,312.19</h1>
                    </div>
                </div>
                <Table />
            </div>
        </div>

    )
}

export default MainSection
