// import React from 'react'
import Nishyanlogo from "../assets/nishyan.png"
import arrowDown from "../assets/Icons/arrowdown.png"
import Home from '../assets/icons/Home.png'
import Analytics from "../assets/Icons/Analytics.png"
import Order from "../assets/Icons/orders.png"
import Products from "../assets/Icons/products.png"
import Delivery from "../assets/Icons//Dilivary.png"
import Marketing from "../assets/Icons/marketing.png"
import payments from "../assets/Icons/payments.png"
import tools from "../assets/Icons/tools.png"
import discount from "../assets/Icons/discount.png"
import audience from "../assets/Icons/Audiance.png"
import appearance from "../assets/Icons/Appearance.png"
import plugins from "../assets/Icons/plugins.png"
import wallet from "../assets/Icons/wallet.png"
const SideBar = () => {
    const utils = [
        {
            icon: Home,
            title: 'Home'
        },
        {
            icon: Order,
            title: 'Orders'
        },
        {
            icon: Products,
            title: 'Products'
        },
        {
            icon: Delivery,
            title: 'Delivery'
        },
        {
            icon: Marketing,
            title: 'Marketing'
        },
        {
            icon: Analytics,
            title: 'Analytics'
        },
        {
            icon: payments,
            title: 'Payments'
        },
        {
            icon: tools,
            title: 'Tools'
        },
        {
            icon: discount,
            title: 'Discount'
        },
        {
            icon: audience,
            title: 'Audience'
        },
        {
            icon: appearance,
            title: 'Appearance'
        },
        {
            icon: plugins,
            title: 'Plugins'
        },


    ]

    return (
        <div className='bg-[#1E2640] flex flex-col justify-between   p-2 w-[208px] z-10'>
            <div className="flex flex-col gap-8 m-2 ">

                <div className='flex items-center justify-between '>
                    <div className="flex gap-2">
                        <div className='w-[39px] h-[39px] '><img src={ Nishyanlogo } alt="nishyan" className='object-contain rounded' /></div>
                        <div className='text-white'>
                            <h1 className='text-[15px] font-medium hig '>Nishyan</h1>
                            <p className='underline text-[13px]'>Visit store</p>

                        </div>
                    </div>
                    <div className='w-[15px] '>
                        <img src={ arrowDown } alt="arrowDown" className='object-contain' />
                    </div>
                </div>

                <div className="flex flex-col gap-3 justify-center ml-1  text-[#FFFFFF]">
                    {
                        utils.map((item) => {
                            return (
                                <div className='flex items-center cursor-pointer group   gap-5' key={ item.title }>
                                    <div className='w-[20px] h-[20px] group-hover:scale-105'><img src={ item.icon } alt="icon" className='object-contain opacity-[80%]' /></div>
                                    <div className=' text-[14px] font-medium group-hover:underline'>{ item.title }</div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>

            <div className="bg-[#353C53] items-center justify-center  rounded w-[192px] h-[58px] flex  gap-2">
                <div className="bg-[#FFFFFF1A] w-[36px] rounded h-[36px] flex items-center justify-center">
                    <img src={ wallet } alt="" className="w-[24px] h-[24px]" />
                </div>
                <div className="  text-white">
                    <h1 className="font-normal text-[13px]">Available credits</h1>
                    <p className="font-medium text-[16px]"> 222.10</p>
                </div>

            </div>

        </div>
    )
}

export default SideBar
