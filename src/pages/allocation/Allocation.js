import React from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import logo from "../../assets/logo.svg";
import down from "../../assets/down.svg";
import search from "../../assets/search.svg";
import play from "../../assets/play.svg";
import settings from "../../assets/settings.svg";
import puzle from "../../assets/puzle.svg";
import circles from "../../assets/circles.svg";
import Chart from "react-google-charts";
import serum from "../../assets/serum.svg";
import Table from "../../components/table/Table.js";

export default function Allocation() {
    return (
        <div>
            <Header buttonClass="border-2 border-black" logo={logo} color="" lineClass="bg-black" />
            <div className="flex  justify-center md:px-12 px-4 pt-3">
                <div className="flex md:flex-row flex-col justify-between md:space-x-12 space-x-0 2xl:w-1/2 lg:w-full">
                    <div>
                        <div className="relative">
                            <div className=" w-64 h-48 shadow-xl bg-gradient-to-tl rounded from-green-100 via-gray-700 to-blue-100"></div>
                            <div className=" absolute top-0 pb-4 -mt-1 rounded -ml-1 w-64 shadow-lg bg-gradient-to-tl from-green-100 via-gray-700 to-blue-100">
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
                                <div className="flex justify-center px-6 mt-4">
                                    <div className="border-b w-11/12 bg-black">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-start justify-between md:mt-0 mt-4 space-x-4">
                        <button className="border h-16 font-poppins rounded-md px-2 py-2">
                            Buy & Sell
                        </button>
                        <button className="border h-16 rounded-md font-poppins px-2 py-2 w-24">
                            Other funtion
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mt-6 shadow-lg  md:mx-12 mx-4 2xl:w-1/2 lg:w-full" >
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-3 pt-3">
                        <div className="lg:flex hidden">
                        </div>
                        <div className="flex font-normal px-3 border rounded-2xl justify-between">
                            <div className='flex flex-col items-center'>
                                <p className="font-poppins text-sm">
                                    NAV
                                </p>
                                <p className="font-poppins text-sm">
                                    $4.44
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className="font-poppins text-sm">
                                    MARKET CAP
                                </p>
                                <p className="font-poppins text-sm">
                                    $4.44
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className="font-poppins text-sm">
                                    INCEPTION DATE
                                </p>
                                <p className="font-poppins text-sm">
                                    FEB 21, 2021
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-3 pr-4">
                            <img src={play} alt="some" />
                            <img src={puzle} alt="some" />
                            <img src={circles} alt="some" />
                            <img src={search} alt="some" />
                            <img src={down} alt="some" />
                            <img src={settings} alt="some" />
                        </div>
                    </div>
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        fill={'#F2F2F2'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['x', 'dogs', 'cats'],
                            [0, 0, 0],
                            [1, 10, 5],
                            [2, 23, 15],
                            [3, 17, 9],
                            [4, 18, 10],
                            [5, 9, 5],
                            [6, 11, 3],
                            [7, 27, 19],
                        ]}
                        options={{
                            hAxis: {
                                title: 'Time',
                            },
                            vAxis: {
                                title: 'Popularity',
                            },
                            series: {
                                1: { curveType: 'function' },
                            },
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="md:px-12 px-4 mt-4 mb-4 2xl:w-1/2 lg:w-full">
                    <Table />
                    <div className="flex md:flex-row flex-col justify-center md:space-x-3 space-x-0 md:space-y-0 space-y-3 mt-4 text-gray-800">
                        <div className="bg-gray-600 p-3 rounded-md">
                            <p className="text-xs ">
                                Check the contract on
                            </p>
                            <img src={serum} alt="" />
                        </div>
                        <div className="bg-gray-600 p-3 rounded-md">
                            <p className="text-xs ">
                                Check the contract on
                            </p>
                            <img src={serum} alt="" />
                        </div>
                        <div className="bg-gray-600 p-3 rounded-md">
                            <p className="text-xs ">
                                Check the contract on
                            </p>
                            <img src={serum} alt="" />
                        </div><div className="bg-gray-600  p-3 rounded-md ">
                            <p className="text-xs ">
                                Check the contract on
                            </p>
                            <img src={serum} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="2xl:w-1/2 lg:w-full">
                    <div className="md:px-12 px-4 ">
                        <h1 className="font-poppins font-semibold text-2xl">
                            Summary :
                        </h1>
                        <p className="text-poppins text-md left  md:px-32 px-0 ml-3 tracking-widest">
                            This is a diversified portfolio of products in the Solana ecosystem.
                        </p>
                    </div>
                    <div className="md:px-12 px-4">
                        <h1 className="font-poppins font-semibold text-2xl">
                            Objective:
                        </h1>
                        <p className="text-poppins text-md left md:px-32 px-0 ml-3 tracking-widest">
                            Build a carefully crafted collection of various Solana products that effectively hedges against market volatility while providing consistent returns.</p>
                    </div>
                </div>
                <div className="pb-4 2xl:w-1/2 lg:w-full">
                    <p className="text-7xl font-eczar text-center font-semibold">
                        Method
                    </p>
                    <div className="flex lg:flex-row flex-col md:px-12 px-4 font-poppins font-light lg:space-x-4 space-x-0 tracking-widest ">
                        <div className="pt-4">
                            <p>
                                Our community came to consensus that these projects are the clear leaders in Solana. Whether the metric is marketcap, volume, assets under management or recognition, these projects lead the pack.
                            </p>
                            <p className="mt-4">
                                Allocation is determined using a strict methodology, with percentage share proportional to the market cap of each project weighted through the computation of a Sentiment Score assessing each project’s innovation, functionality to the Solana ecosystem & growth potential. This robust procedure allows our MuTokens to scale to the largest possible size, without smaller projects with less liquidity limiting potential growth.
                            </p>
                        </div>
                        <div className="h-50vh border-r w-0.5 lg:flex hidden border-gray-300">

                        </div>
                        <div className="pt-4">
                            <p>
                                This is a tokenized representation of several Solana ecosystem products. When a user mints MUN our contract either purchases the underlying assets from a decentralized exchange like Serum or uses tokens available in the user’s wallet, sending them to our treasury. In this way MUN tokens are fully backed by reserves, redeemable at any time at the press of a button.
                            </p>
                            <p className="mt-4">
                                The index is built using TokenSwap pools which constantly rebalance and react to market changes in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer color="bg-gray-900"/>
        </div>
    );
}
