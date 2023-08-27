import React from 'react'
import EastIcon from '@mui/icons-material/East';
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";
import Image from "next/image";

export default function Product() {
  return (
    <div className="lg:flex divide-y">
      <div className="block align-bottom lg:pb-40 pr-2 w-11/12 divide-y  pt-12 ml-4 lg:pl-40">
        <div >
          <div className="mb-1">
            <h1 className="text-[11px] font-semibold text-[#54637c]">
              FEATURED
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-5 p-1">
            <div className="flex lg:w-96 mb-4 align-middle group">
              <div className="p-2.5 rounded-[0.2rem] flex relative bg-gray-300/75 mr-5 group-hover:bg-gray-400/75">
                <Image
                  src="/jira software-icon-gradient-blue.svg"
                  width={30}
                  height={30} // required
                  alt="Jirasoftware"
                />
              </div>
              <div className="w-fit inline-block align-middle">
                <div className="inline-block align-middle p-auto text-center h-fit">
                  <h2 className="w-fit whitespace-nowrap m-0 text-sm font-medium text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                    Jira Software
                  </h2>
                </div>
                <div className="flex align-middle h-fit">
                  <p className="text-[#54637c] text-xs text-center">
                    Project and issue tracking
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-96 mb-4 align-middle group">
              <div className="p-2.5 rounded-[0.2rem] flex relative bg-gray-300/75 mr-5 group-hover:bg-gray-400/75">
                <Image
                  src="/confluence-icon-gradient-blue.svg"
                  width={30}
                  height={30} // required
                  alt="Coffluence"
                />
              </div>
              <div className="w-fit inline-block align-middle">
                <div className="inline-block align-middle p-auto text-center h-fit">
                  <h2 className="w-fit whitespace-nowrap m-0 text-sm font-medium text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                    Cofluence
                  </h2>
                </div>
                <div className="flex align-middle h-fit">
                  <p className="text-[#54637c] text-xs text-center">
                    Content collaboration
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-96 my-4 align-middle group">
              <div className="p-2.5 rounded-[0.2rem] flex relative bg-gray-300/75 mr-5 group-hover:bg-gray-400/75">
                <Image
                  src="/jira service desk-icon-gradient-blue.svg"
                  width={30}
                  height={30} // required
                  alt="Jira Service Managment"
                />
              </div>
              <div className="w-fit inline-block align-middle">
                <div className="inline-block align-middle p-auto text-center h-fit">
                  <h2 className="w-fit whitespace-nowrap m-0 text-sm font-medium text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                    Jira Service Managment
                  </h2>
                </div>
                <div className="flex align-middle h-fit">
                  <p className="text-[#54637c] text-xs text-center">
                    High-velocity ITSM
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-96 my-4 align-middle group">
              <div className="p-2.5 rounded-[0.2rem] flex relative bg-gray-300/75 mr-5 group-hover:bg-gray-400/75">
                <Image
                  src="/trello-icon-gradient-blue.svg"
                  width={30}
                  height={30} // required
                  alt="Trello"
                />
              </div>
              <div className="w-fit inline-block align-middle">
                <div className="inline-block align-middle p-auto text-center h-fit">
                  <h2 className="w-fit whitespace-nowrap m-0 text-sm font-medium text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                    Trello
                  </h2>
                </div>
                <div className="flex align-middle h-fit">
                  <p className="text-[#54637c] text-xs text-center">
                    Visual project managment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex h-10 text-[13px]  text-[#2a6ed4] font-medium align-middle group lg:m-2">
            <h3 className="text-center h-fit px-2 flex-nowrap">View all products</h3>
            <div className=" group-hover:translate-x-1.5 ease-in-out duration-300 ">
              <EastIcon
                className="text-[13px]"
              />
            </div>

          </div>
        </div>
        <div className="px-1 py-4 lg:p-3 group">
          <div className="text-[1rem] font-medium text-[#0a1e42] group-hover:text-[#2a6ed4]">
            <h4>Marketplace</h4>
          </div>
          <div className="text-[.75rem] flex font-medium">
            <p className="mr-2">
              Connect thousands of apps and integrations for all
              your Atlassian products
            </p>
            <div className="text-[#0a1e42] font-bold group-hover:translate-x-1 ease-in-out duration-300 ">
              <EastIcon
                className="text-[13px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[302px] pl-6 lg:ml-4 lg:bg-gray-300/25 pt-12 pb-4 pr-auto lg:w-[775px]">
        <div>
          <div className="mb-1">
            <h1 className="text-[11px] font-semibold text-[#54637c]">
              WHAT&apos;S NEW
            </h1>
          </div>
          <div className="p-1 grid grid-cols-1 mb-2">
            <div className="flex w-96 mb-4 align-middle group">
              <div className="p-2.5 rounded-[0.2rem] flex relative bg-gray-300/75 mr-5 group-hover:bg-gray-400/75">
                <Image
                  src="/logos-atlas-icon-gradient-blue.svg"
                  width={30}
                  height={30} // required
                  alt="Atlas"
                />
              </div>
              <div className="w-fit inline-block align-middle ">
                <div className="inline-block align-middle p-auto text-center h-fit">
                  <h2 className="w-fit whitespace-nowrap m-0 text-sm font-medium text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                    Atlas
                  </h2>
                </div>
                <div className="flex align-middle h-fit">
                  <p className="text-[#54637c] text-sm text-center">
                    Teamwork directory
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-fit mb-4 align-middle pt-5 group">
              <div className="flex w-fit h-fit  py-auto justify-center my-auto align-middle ">
                <div className="p-2.5 h-fit rounded-[0.2rem] flex relative bg-gray-300/75 mr-5 self-align-middle group-hover:bg-gray-400/75 ">
                  <Image
                    src="Jira Product Discovery-icon-blue.svg"
                    width={30}
                    height={30} // required
                    alt="Jira Product Discovery"
                  />
                </div>
              </div>

              <div className="w-min inline-block align-middle w-min">
                <div className="inline-block align-middle p-auto text-center h-fit">
                  <h2 className="w-fit whitespace-nowrap m-0 text-sm font-medium text-[#0a1e42] text-center h-fit group-hover:text-[#2a6ed4] ">
                    Jira Product Discovery
                  </h2>
                </div>
                <div className="flex align-middle h-fit w-full">
                  <p className="text-[#54637c] text-sm flex-wrap flex">
                    Prioritization and roadmaping
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex h-10 text-[13px]  text-[#2a6ed4] font-medium align-middle group my-2">
              <h3 className="text-center font-semibold h-fit px-2">View all</h3>
              <div className=" group-hover:translate-x-1.5 ease-in-out duration-300 ">
                <EastIcon
                  className="text-[13px]"
                />
              </div>

            </div>
          </div>
        </div>
        <div className="my-11 mx-2">
          <div className="mb-4">
            <h1 className="text-[11px] font-semibold text-[#54637c]">
              YOU MIGHT FIND HELPFUL
            </h1>
          </div>
          <div className="my-7 w-fit whitespace-nowrap text-md font-medium text-[#0a1e42] text-center h-fit ">
            <div className="flex my-5 group">
              <div className="mr-1">
                <MapTwoToneIcon />
              </div>
              <div className='group-hover:text-[#2a6ed4]'>
                <h2>Cloud Product Roadmap</h2>
              </div>
            </div>
            <div className="flex group">
              <div className="mr-1">
                <CloudDoneRoundedIcon />
              </div>
              <div className='group-hover:text-[#2a6ed4]'>
                <h2>Atlassian Migration Program</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
