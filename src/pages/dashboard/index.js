import React from 'react'
import Header from "../../components/header"
import Footer from "../../components/footer"
import logoS from "../../assets/logoS.svg"
import logo from "../../assets/logo.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
export default function Dashboard(props) {
    return (
        <div>
            <Header buttonClass="border-2 border-black" logo={logo} color="" lineClass="bg-black" />
            <div className="bg-mountains bg-no-repeat bg-center bg-100 pb-56  pt-4 flex justify-start">
                <div className="flex items-end flex-col pl-12">
                    <p className="text-7xl font-eczar font-semibold">
                        MuDao
                   </p>
                    <p className="text-sm font-poppins border-t-2 -mt-6 border-black ">
                        DECENTERLIZED FINANCE
                   </p>
                </div>
            </div>
            <div className="flex justify-center">
            <div className="flex 2xl:w-8/12  w-full md:flex-row flex-col justify-between md:px-20 px-8 py-12 ">
                <div className="lg:w-1/3 md:w-1/2 w-full md:mb-0 mb-4">
                    <p className="text-xl font-semibold font-poppins">
                        Decentralized and diversified community-governed assets on the Solana Blockchain
                         </p>
                    <p className="fon-robotoMono mt-4 text-sm">
                        MuDao provides exposure to a holistic collection of financial assets without high fees or need to worry about rebalancing.
                         </p>
                </div>
                <img src={logoS} alt="some" />
            </div>
            </div>
           <div className="flex justify-center">
            <div className="md:px-20 px-12 flex 2xl:w-8/12  w-full  justify-between md:flex-row flex-col md:space-y-2 space-y-4 flex-wrap items-center py-8">
                <div className="relative">
                    <div className="h-64 w-64 shadow-xl bg-gradient-to-tl rounded from-green-100 via-gray-700 to-blue-100"></div>
                    <div className="h-64 absolute top-0 -mt-1 rounded -ml-1 w-64 shadow-lg bg-gradient-to-tl from-green-100 via-gray-700 to-blue-100">
                        <div className="flex pl-8 pt-6 ">
                            <p className="text-xs w-11/12 font-poppins border-b border-black">
                                MuToken
                             </p>
                            <span className="transform font-poppins  text-sm -rotate-90">MUN</span>
                        </div>
                        <div className="p-4 flex">
                            <div className="border-4 border-black rounded-full w-20 h-20 flex justify-center ">
                                <img src={logo} alt="somw" className=" pt-3 pb-4 border-black " />
                            </div>
                            <span className="transform -rotate-90 text-xs mb-12 ml-2 ">04</span>
                            <div>
                                <p className="font-eczar font-semibold text-4xl">MUN</p>
                                <div className="flex items-center space-x-2">
                                    <p className="font-eczar font-semibold ">
                                        $4.7
                                  </p>
                                    <p className="text-xs">
                                        +18.9%
                                  </p>
                                </div>
                            </div>
                        </div>
                        <p className="uppercase text-xs font-poppins font-light px-4">
                            Balanced portfolio of Solana assets split by market cap
                          </p>
                        <div className="flex justify-center px-6 mt-4">
                            <div className="border-b w-11/12 bg-black">
                            </div>
                        </div>
                        <p className="text-xs font-poppins font-light px-4 mt-4 uppercase">
                            Since launch +268.34%
                          </p>
                    </div>
                </div>
                <div className="h-80 md:visible hidden w-0.5 bg-gray-100"></div>
                <div className="relative">
                    <div className="h-64 w-64 shadow-xl bg-gradient-to-tl rounded from-green-100 via-gray-700 to-blue-100">

                    </div>
                    <div className="h-64 absolute top-0 -mt-1 rounded -ml-1 w-64 shadow-lg bg-gradient-to-tl from-green-100 via-gray-700 to-blue-100">
                        <div className="flex pl-8 pt-6 ">
                            <p className="text-xs w-11/12 font-poppins border-b border-black">
                                MuToken
                             </p>
                            <span className="transform font-poppins  text-sm -rotate-90">MUN</span>
                        </div>
                        <div className="p-4 flex">
                            <div className="border-4 border-black rounded-full w-20 h-20 flex justify-center ">
                                <img src={icon2} alt="somw" className=" pt-3 pb-4 border-black " />
                            </div>
                            <span className="transform -rotate-90 text-xs mb-12 ml-2 ">04</span>
                            <div>
                                <p className="font-eczar font-semibold text-4xl">MUT</p>
                                <div className="flex items-center space-x-2">
                                    <p className="font-eczar font-semibold ">
                                        $4.7
                                  </p>
                                    <p className="text-xs">
                                        +18.9%
                                  </p>
                                </div>
                            </div>
                        </div>
                        <p className="uppercase text-xs font-poppins font-light px-4">
                            Balanced portfolio of Solana assets split by market cap
                          </p>
                        <div className="flex justify-center px-6 mt-4">
                            <div className="border-b w-11/12 bg-black">
                            </div>
                        </div>
                        <p className="text-xs font-poppins font-light px-4 mt-4 uppercase">
                            Since launch +268.34%
                          </p>
                    </div>
                </div>
                <div className="h-80 w-0.5 md:visible hidden border-r border-gray-100"></div>
                <div className="relative">
                    <div className="h-64 w-64 shadow-xl bg-gradient-to-tl rounded from-green-100 via-gray-700 to-blue-100">

                    </div>
                    <div className="h-64 absolute top-0 -mt-1 rounded -ml-1 md:w-64 w-full shadow-lg bg-gradient-to-tl from-green-100 via-gray-700 to-blue-100">
                        <div className="flex pl-8 pt-6 ">
                            <p className="text-xs w-11/12 font-poppins border-b border-black">
                                MuToken
                             </p>
                            <span className="transform font-poppins  text-sm -rotate-90">MUN</span>
                        </div>
                        <div className="p-4 flex">
                            <div className="border-4 border-black rounded-full w-20 h-20 flex justify-center ">
                                <img src={icon3} alt="somw" className=" pt-3 pb-4 border-black " />
                            </div>
                            <span className="transform -rotate-90 text-xs mb-12 ml-2 ">04</span>
                            <div>
                                <p className="font-eczar font-semibold text-4xl">MUK</p>
                                <div className="flex items-center space-x-2">
                                    <p className="font-eczar font-semibold ">
                                        $4.7
                                  </p>
                                    <p className="text-xs">
                                        +18.9%
                                  </p>
                                </div>
                            </div>
                        </div>
                        <p className="uppercase text-xs font-poppins font-light px-4">
                            Balanced portfolio of Solana assets split by market cap
                          </p>
                        <div className="flex justify-center px-6 mt-4">
                            <div className="border-b w-11/12 bg-black">
                            </div>
                        </div>
                        <p className="text-xs font-poppins font-light px-4 mt-4 uppercase">
                            Since launch +268.34%
                          </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-blue-200 flex justify-center">
                <div className="flex md:px-12 px-4 py-12 lg:flex-row flex-col">
                    <div className="flex flex-col items-center text-center text-white">
                        <h1 className="text-6xl font-eczar font-semibold">
                            Convenient
                        </h1>
                        <div className="sm:w-2/4 w-full flex flex-col items-center space-y-4">
                            <p className="text-md px-4  font-poppins font-semibold mt-12">
                                Broad exposure to multiple asset classes
                        </p>
                            <div className="h-12 w-0.5 border-r border-gray-200 "></div>
                            <p className="text-sm font-mono">
                                Forget about the fees and keeping track of a multitude of assets in various accounts. Each of our tokens is minted to cover a variety of diversified products.
                        </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center text-white">
                        <h1 className="text-6xl font-eczar font-semibold">
                            Safe
                        </h1>
                        <div className="sm:w-2/4 w-full flex flex-col items-center space-y-4">
                            <p className="text-md px-4  font-poppins font-semibold mt-12">
                                Broad exposure to multiple asset classes
                        </p>
                            <div className="h-12 w-0.5 border-r border-gray-200 "></div>
                            <p className="text-sm font-mono">
                                Forget about the fees and keeping track of a multitude of assets in various accounts. Each of our tokens is minted to cover a variety of diversified products.
                        </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center text-white">
                        <h1 className="text-6xl font-eczar font-semibold" >
                            Transparent
                        </h1>
                        <div className="sm:w-2/4 w-full flex flex-col items-center space-y-4">
                            <p className="text-md px-4  font-poppins font-semibold mt-12">
                                Broad exposure to multiple asset classes
                        </p>
                            <div className="h-12 w-0.5 border-r border-gray-200 "></div>
                            <p className="text-sm font-mono">
                                Forget about the fees and keeping track of a multitude of assets in various accounts. Each of our tokens is minted to cover a variety of diversified products.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
