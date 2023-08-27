import React from "react";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

export default function Resource() {
    return (
        <div className="lg:flex">
            <div className="block align-bottom lg:pb-40 pr-2 w-11/12  pt-12 ml-4 lg:ml-40 ">
                <div className="p-3">
                    <div className="lg:flex justify-between">
                        <div className="w-3/5">
                            <div>
                                <h1 className="text-[11px] font-semibold text-[#54637c]">
                                    LEARN 
                                </h1>
                            </div>
                            <div className="text-[#0a1e42] grid">
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Atlassian University</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Atlassian Playbook</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Production Documentation</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Developer Resources</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/5 my-8">
                            <div>
                                <h1 className="text-[11px] font-semibold text-[#54637c]">
                                SUPPORT 
                                </h1>
                            </div>
                            <div className="text-[#0a1e42] grid">
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Atlassian Community</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Atlassian Support</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Atlassian Migration Program</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Enterprise Services</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Partner Support</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Purchasing & Licensing</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/5">
                            <div>
                                <h1 className="text-[11px] font-semibold text-[#54637c]">
                                CONNECT
                                </h1>
                            </div>
                            <div className="text-[#0a1e42] grid">
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">About us</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Careers</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Work Life Blog</h2>
                                </div>
                                <div className="my-1">
                                    <h2 className="hover:text-[#2a6ed4]">Events</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="min-w-[302px] pl-6 ml-4 lg:bg-gray-300/25 pt-8 lg:pt-12 pr-auto w-[775px]">
                <div>
                    <div className="mb-1">
                        <h1 className="text-[11px] font-semibold text-[#54637c]">
                            WHAT'S NEW
                        </h1>
                    </div>
                    <div className="p-1 grid grid-cols-1 mb-2">
                        <div>
                        <div className=" flex justify-self-start w-fit h-fit relative align-middle ">
                        <a
                            className="py-2 align-middle flex "
                            href="/"
                            data-te-ripple-color="light"
                        >
                            <Image
                                src="/team23.jpg"
                                        layout="strech"
                                        width={192}
                                height={122}// required
                                alt="logo"
                            // objectFit="cover" // change to suit your needs
                            // className="rounded-full"
                            />
                        </a>
                    </div>
                        </div>
                        <div className="inline-block align-middle p-auto text-center h-fit my-3">
                            <h2 className="w-fit whitespace-nowrap m-0 text-sm font-semibold text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                                Atlassian Team'32
                            </h2>
                        </div>

                        <div className="flex align-middle h-fit">
                            <p className="text-[#54637c] text-[11px] font-medium flex-wrap w-60">
                            Catch up on the latest Atlassian product announcements and innovations shared live on stage in Las Vegas.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex h-10 text-[13px]  text-[#2a6ed4] font-medium align-middle group my-2">
                            <h3 className="text-center font-semibold h-fit px-2">
                                Watch Now
                            </h3>
                            <div className=" group-hover:translate-x-1.5 ease-in-out duration-300 ">
                                <EastIcon className="text-[13px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
