import React from 'react'
import NavBar from './NavBar'
import MainSection from './MainSection'

const MainBody = () => {
    return (
        <div className='flex flex-col  w-[1152px] overflow-y-auto '>
            <NavBar />
            <MainSection />
        </div>
    )
}

export default MainBody
