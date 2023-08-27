"use client";
import { useEffect, useState } from "react";
import {
    KeyboardArrowDown,
    KeyboardArrowRight,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Product from "./items/Product";
import Solution from "./items/Solution";
import Resource from "./items/Resource";


export default function Megamenu() {
    const [open, setopen] = useState("false");
    const [smallIcon, setsmallIcon] = useState(<MenuIcon />);

    const handleClick = () => {
        if (open === "false") {
            setopen("true");
        } else {
            setopen("false");
        }
    };
    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown, Ripple, initTE } = await import(
                "tw-elements"
            );
            initTE({ Collapse, Dropdown, Ripple });
        };
        init();
    }, []);

    useEffect(() => {
        if (open === "false") {
            setsmallIcon(<MenuIcon />);
        } else {
            setsmallIcon(<CloseIcon />);
        }
    }, [open]);

    const menus = [
        { title: "Products", id: 1, page: <Product /> },
        { title: "Solutions", id: 2, page : <Solution /> },
        { title: "Resources", id: 3, page : <Resource />},
    ];

    

    return (
        <nav className=" flex-warp items-center bg-neutral-50 lg:py-4 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex justify-center align-middle static">
            <div className="justify-center lg:container w-full flex  lg:h-10 lg:align-middle ">
                <div className=" flex flex-wrap w-full md:w-auto align-middle justify-between lg:justify-start">
                    <div className=" flex justify-self-start w-40 md:w-48 mx-4 relative align-middle ">
                        <a
                            className="py-2 px-2 align-middle flex lg:px-2 "
                            href="/"
                            data-te-ripple-color="light"
                        >
                            <Image
                                src="/logo.svg"
                                layout="fill" // required
                                alt="logo"
                            // objectFit="cover" // change to suit your needs
                            // className="rounded-full"
                            />
                        </a>
                    </div>

                    <button
                        className="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden mx-4"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContentX"
                        aria-controls="navbarSupportedContentX"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleClick}
                    >
                        {smallIcon}
                    </button>

                    <div
                        className="!visible hidden basis-[100%] items-center lg:!flex lg:basis-auto w-100"
                        id="navbarSupportedContentX"
                        data-te-collapse-item
                    >
                        <ul
                            className="mr-auto   flex-wrap flex-row flex-col lg:flex-row border-t lg:border-none w-full justify-between hidden lg:flex"
                            data-te-navbar-nav-ref
                        >
                            <li className="lg:hidden">
                                <div className="flex-row flex justify-between my-5 mx-4">
                                    <button className="border-0 bg-blue-700 text-white px-3 py-1 rounded-sm text-sm">
                                        Try Now
                                    </button>

                                    <a
                                        href="/"
                                        className="border-0 text-blue-700 px-3 py-1 rounded-sm text-xs font-semibold"
                                    >
                                        Sign in
                                    </a>
                                </div>
                            </li>

                            {menus.map((menu) => (
                                <div key={menu.id}>
<li
                                    className=" items-center align-center block py-2 lg:py-0 px-5  rounded-sm border-b border-zinc-400 lg:border-none transition-transform duration-150 ease-in-out hover:text-neutral-700 hover:bg-cyan-600/50 lg:hover:bg-gray-300/75 focus:text-neutral-700 dark:hover:text-white lg:p-0 "
                                    data-te-nav-item-ref
                                    data-te-dropdown-ref
                                >
                                    <a
                                        className=" flex items-center whitespace-nowrap h-fit rounded-sm py-1 dark:focus:text-white lg:px-0 text-slate-600 font-medium lg:p-0"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        type="button"
                                        id="dropdownMenuButtonX"
                                        data-te-dropdown-toggle-ref
                                        aria-expanded="false"
                                        data-te-nav-link-ref
                                    >
                                        <p>{menu.title}</p>

                                        <div className=" hidden lg:flex">
                                            <KeyboardArrowDown color="primary" fontSize="small" />
                                        </div>
                                        <span className="ml-2 w-2 lg:hidden">
                                            <KeyboardArrowRight color="primary" fontSize="small" />
                                        </span>
                                    </a>
                                    
                                    <div
                                        className="hidden w-full bg-zinc-400/50 bg-clip-content pt-[1rem] transition-transform text-neutral-600  dark:text-neutral-200 [&[data-te-dropdown-show]]:block h-screen"
                                        aria-labelledby="dropdownMenuButtonX"
                                        data-te-dropdown-menu-ref
                                    >
                                        <div className="border-t bg-white drop-shadow-[0_9px_3px_rgba(0,0,0,0.15)]">
                                            {menu.page}
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    
                                </li>
                                </div>
                                
                                
                            ))}
                        </ul>
                        <ul
                            className="mr-auto  flex-wrap flex-row flex-col lg:flex-row border-t lg:border-none w-full justify-between block lg:hidden"
                            data-te-navbar-nav-ref
                        >
                            <li className="lg:hidden">
                                <div className="flex-row flex justify-between my-5 mx-4">
                                    <button className="border-0 bg-blue-700 text-white px-3 py-1 rounded-sm text-sm">
                                        Try Now
                                    </button>

                                    <a
                                        href="/"
                                        className="border-0 text-blue-700 px-3 py-1 rounded-sm text-xs font-semibold"
                                    >
                                        Sign in
                                    </a>
                                </div>
                            </li>

                            {menus.map((menu) => (
                                <div key={menu.id}>
                                    <li
                                    className=" items-center align-center block py-2 lg:py-0 px-5  rounded-sm border-b border-zinc-400 lg:border-none transition-transform duration-150 ease-in-out hover:text-neutral-700 hover:bg-cyan-600/50 lg:hover:bg-gray-300/75 focus:text-neutral-700 dark:hover:text-white lg:p-0 "
                                    data-te-nav-item-ref
                                    data-te-dropdown-ref
                                >
                                    <a
                                        className=" flex items-center whitespace-nowrap h-fit rounded-sm py-1 dark:focus:text-white lg:px-0 text-slate-600 font-medium lg:p-0"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        type="button"
                                        id="dropdownMenuButtonX"
                                        data-te-dropdown-toggle-ref
                                        aria-expanded="false"
                                        data-te-nav-link-ref
                                    >
                                        <p>{menu.title}</p>

                                        <div className=" hidden lg:flex">
                                            <KeyboardArrowDown color="primary" fontSize="small" />
                                        </div>
                                        <span className="ml-2 w-2 lg:hidden">
                                            <KeyboardArrowRight color="primary" fontSize="small" />
                                        </span>
                                    </a>
                                    
                                    <div
                                        className="hidden w-full bg-zinc-400/50 bg-clip-content pt-[1rem] transition-transform text-neutral-600  dark:text-neutral-200 [&[data-te-dropdown-show]]:block h-screen"
                                        aria-labelledby="dropdownMenuButtonX"
                                        data-te-dropdown-menu-ref
                                    >
                                        <div className="border-t bg-white drop-shadow-[0_9px_3px_rgba(0,0,0,0.15)]">
                                            {menu.page}
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    
                                </li>
                                </div>
                                
                            ))}
                        </ul>
                        
                    </div>
                </div>
                <div className="hidden lg:block flex my-auto  ">
                    <div className="fit h-full w-auto flex align-middle">
                        <div className="flex justify-between mx-4 align-middle divide-solid ">
                            <div>
                                <button className="border-0 rounded text-sm whitespace-nowrap my-auto py-1">
                                    <SearchIcon />
                                </button>
                            </div>

                            <div>
                                <button className="border-0 bg-blue-700 text-white px-4 rounded text-sm whitespace-nowrap my-auto py-1 mx-3">
                                    Try Now
                                </button>
                            </div>
                            <div>
                                <a
                                    href="/"
                                    className="border-0 text-blue-700 px-3 py-1 rounded-sm text-xs font-semibold align-middle my-auto whitespace-nowrap border-l border-slate-400/50"
                                >
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
