import React from 'react'
import NavBar from './NavBar'
import MainSection from './MainSection'

const MainBody = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center overflow-y-auto '>
            <NavBar />
            <MainSection />
        </div>
    )
}

export default MainBody
