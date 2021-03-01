import React,{useState} from 'react'
import icon from '../../assets/menuIcon.svg'
export default function Header(props) {
    const [open ,setOpen]=useState(false)
    return (
        <>
        <div className={`flex justify-between items-center   pl-14 pr-8 py-6 ${props.color}`}>
            <div className="flex items-center">
              <p className="font-poppins text-sm tracking-widest font-normal">MUDAO</p>
               <img src={props.logo} alt="some" className=""/>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center space-x-2 md:hidden visible">
                    <p className="text-sm font-poppins ">
                        MENU
                    </p>
                    <img src={icon} alt="" onClick={()=>setOpen(!open)}/></div>
            
                <div className=" md:flex-row flex-col md:flex hidden items-center justify-between space-x-4">
                <p  className="font-poppins text-sm tracking-widest font-normal">
                    PRODUCTS
                </p>
                <hr className={`w-10 bg-black ${props.lineClass} h-1`}/>
                <p className="font-poppins text-sm tracking-widest font-normal">
                    GOVERNANCE
                </p>
                <hr className={`w-10 bg-black ${props.lineClass} h-1`}/>
                <p className="font-poppins text-sm tracking-widest font-normal">
                    ABOUT
                </p>
                <button  className={`font-poppins text-sm tracking-widest font-normal ${props.buttonClass} px-2 py-1`}>
                     CONNECT WALLET
                </button>
            </div>
            
            </div>
            
        </div>
       { open===true? <div className={`flex  flex-col md:hidden visible items-center ${props.color} justify-between space-y-4 `}>
                <p  className="font-poppins text-sm tracking-widest font-normal">
                    PRODUCTS
                </p>
                <hr className={`w-10  ${props.lineClass} h-1`}/>
                <p className="font-poppins text-sm tracking-widest font-normal">
                    GOVERNANCE
                </p>
                <hr className={`w-10  ${props.lineClass} h-1`}/>
                <p className="font-poppins text-sm tracking-widest font-normal">
                    ABOUT
                </p>
                <button  className="font-poppins text-sm tracking-widest font-normal border-2 border-black px-2 py-1">
                     CONNECT WALLET
                </button>
            </div>:null}
        </>
    )
}
