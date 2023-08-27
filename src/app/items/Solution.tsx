import React from 'react'
import EastIcon from '@mui/icons-material/East';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import BoltIcon from '@mui/icons-material/Bolt';
import LanTwoToneIcon from '@mui/icons-material/LanTwoTone';

export default function Solution() {
    return (
        <div className="lg:flex divide-y">
            <div className="block align-bottom pb-4 lg:pb-24 pr-2 w-11/12  pt-12 ml-4 lg:ml-40">
                <div>
                    <div className="mb-1">
                        <h1 className="text-[11px] font-semibold text-[#54637c]">
                            FEATURED
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mb-5 lg:p-1">
                        <div className='bg-gradient-to-r from-sky-300/50 to-indigo-300/50 p-5 my-3 lg:m-3 rounded hover:shadow-2xl ease-in-out duration-200'>
                            <div className='flex w-full justify-between'>
                                <div className="inline-block align-middle p-auto text-center h-fit">
                                    <h2 className="w-fit whitespace-nowrap m-0 text-md text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                                        Work Managment
                                    </h2>
                                </div>
                                <div className='justify-self-end flex text-[#0a1e42]'>
                                    <FileCopyTwoToneIcon />
                                </div>
                            </div>
                            <div className="flex align-middle h-fit mt-4">
                            <p className="text-[#0a1e42] text-[13px] font-medium">
                                    Manage projects and align goals across all teams to achieve deliverables
                                </p>
                            </div>

                        </div>
                        <div className='bg-gradient-to-r from-blue-300/50 to-emerald-300/50 p-5 my-3 lg:m-3 rounded hover:shadow-2xl ease-in-out duration-200'>
                            <div className='flex w-full justify-between'>
                                <div className="inline-block align-middle p-auto text-center h-fit">
                                    <h2 className="w-fit whitespace-nowrap m-0 text-md text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                                        IT Service Managment
                                    </h2>
                                </div>
                                <div className='justify-self-end flex text-[#0a1e42]'>
                                    <BoltIcon />
                                </div>
                            </div>
                            <div className="flex align-middle h-fit mt-4">
                            <p className="text-[#0a1e42] text-[13px] font-medium">
                                Enable dev, IT ops, and business teams to deliver great service at high velocity
                                </p>
                            </div>

                        </div>
                        <div className='bg-gradient-to-r from-purple-200/50 to-orange-200/50 p-5 my-3 lg:m-3 rounded hover:shadow-2xl ease-in-out duration-200'>
                            <div className='flex w-full justify-between'>
                                <div className="inline-block align-middle p-auto text-center h-fit">
                                    <h2 className="w-fit whitespace-nowrap m-0 text-md text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                                        Agile & DevOps
                                    </h2>
                                </div>
                                <div className='justify-self-end flex text-[#0a1e42]'>
                                    <LanTwoToneIcon />
                                </div>
                            </div>
                            <div className="flex align-middle h-fit mt-4">
                                <p className="text-[#0a1e42] text-[13px] font-medium">
                                Run a world-class agile software organization from discovery to delivery and operations
                                </p>
                            </div>

                        </div>


                    </div>

                </div>
                <div className="p-3">
                    <div className='lg:flex justify-between'>
                        <div className='w-3/5'>
                            <div>
                                <h1 className="text-[11px] font-semibold text-[#54637c]">
                                    BY TEAM SIZE
                                </h1>
                            </div>
                            <div className="text-[#0a1e42] grid">
                                <div className='my-1'>
                                    <h2 className='hover:text-[#2a6ed4]'>
                                        Enterprise
                                    </h2>
                                </div>
                                <div className='my-1'>
                                    <h2 className='hover:text-[#2a6ed4]'>
                                        Small Business
                                    </h2>
                                </div>
                                <div className='my-1'>
                                    <h2 className='hover:text-[#2a6ed4]'>
                                        Startup
                                    </h2>
                                </div>
                                <div className='my-1'>
                                    <h2 className='hover:text-[#2a6ed4]'>
                                        Non-profit
                                    </h2>
                                </div>
                            </div>
                            
                           
                        </div>
                        <div className='w-full my-7'>
                            <div>
                                <div>
                                    <h1 className="text-[11px] font-semibold text-[#54637c]">
                                        BY TEAM FUNCTION
                                    </h1>
                                </div>
                            </div>
                            <div>
                            <div className="text-[#0a1e42] grid lg:grid-cols-2 grid-cols-1  ">
                                <div className='my-1 w-60 flex'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        Software Development
                                    </h2>
                                </div>
                                <div className='my-1 w-60 flex'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        Operations
                                    </h2 >
                                </div>
                                <div className='my-1 flex w-60'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        Marketing
                                    </h2>
                                </div>
                                <div className='my-1 flex w-60'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        IT
                                    </h2>
                                </div>
                                <div className='my-1 flex w-60'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        HR
                                    </h2>
                                </div>
                                <div className='my-1 flex w-60'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        Finance
                                    </h2>
                                </div>
                                <div className='my-1 flex w-60'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        Legal
                                    </h2>
                                </div>
                                <div className='my-1 flex w-60'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        Incident Response
                                    </h2>
                                </div>
                                <div className='my-1 flex w-60'>
                                    <h2 className='w-full hover:text-[#2a6ed4]'>
                                        Government
                                    </h2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:min-w-[302px] pl-6 ml-4 lg:bg-gray-300/25 pt-8 lg:pt-12  pr-auto lg:w-[775px]">
                <div>
                    <div className="mb-1">
                        <h1 className="text-[11px] font-semibold text-[#54637c]">
                            WHAT&apos;S NEW
                        </h1>
                    </div>
                    <div className="p-1 grid grid-cols-1 mb-2">
                        <div className="inline-block align-middle p-auto text-center h-fit my-3">
                            <h2 className="w-fit whitespace-nowrap m-0 text-sm font-semibold text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                                Atlassian Together
                            </h2>
                        </div>


                        <div className="flex align-middle h-fit">
                            <p className="text-[#54637c] text-[11px] flex-wrap w-60">
                                Get Atlassian work management products in one convenient package for enterprise teams.
                            </p>
                        </div>

                    </div>
                    <div>
                        <div className="w-full flex h-10 text-[13px]  text-[#2a6ed4] font-medium align-middle group my-2">
                            <h3 className="text-center font-semibold h-fit px-2">Learn More</h3>
                            <div className=" group-hover:translate-x-1.5 ease-in-out duration-300 ">
                                <EastIcon
                                    className="text-[13px]"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-11 mx-2 pb-32">
                    <div className="mb-4">
                        <h1 className="text-[11px] font-semibold text-[#54637c]">
                            YOU MIGHT FIND HELPFUL
                        </h1>
                    </div>
                    <div className="my-7 w-fit whitespace-nowrap text-md font-medium text-[#0a1e42] text-center h-fit ">
                        <div className="flex my-5 group">
                            <div className="mr-1">
                                <VerifiedUserIcon />
                            </div>
                            <div className='group-hover:text-[#2a6ed4]'>
                                <h2>Atlassian Trust & Security </h2>
                            </div>
                        </div>
                        <div className="flex group">
                            <div className="mr-1">
                                <ApartmentTwoToneIcon />
                            </div>
                            <div className='group-hover:text-[#2a6ed4]'>
                                <h2>Customer Case Studies</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
