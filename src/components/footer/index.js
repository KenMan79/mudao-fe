import React from 'react'
import logo from '../../assets/logo.svg'
export default function Footer(props) {
    return (
        <div className={`flex md:flex-row flex-col  justify-between md:items-center items-start py-6 px-4 ${props.color}`}>
            <div className="flex items-center">
                <p className="text-sm font-poppins font-normal"> 
                    MUDAO
                </p>
                <img src={logo} alt=""/>
            </div>
            <div className="flex space-x-12 mr-24">
                <div className="space-y-4">
                    <p className="text-sm font-poppins font-normal cursor-pointer">
                        PRODUCTS
                    </p>
                    <p className="text-sm font-poppins font-normal cursor-pointer">
                      GOVERNANCE
                    </p>
                    <p className="text-sm font-poppins font-normal cursor-pointer">
                        About
                    </p>
                </div>
                <div className="space-y-4">
                    <p className="text-sm font-poppins font-normal cursor-pointer">
                        DISCORD
                    </p>
                    <p className="text-sm font-poppins font-normal cursor-pointer">
                        TWITTER
                    </p>
                    <p className="text-sm font-poppins font-normal cursor-pointer">
                        TELLEGRAM
                    </p>
                </div>
            </div>
        </div>
    )
}
