"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    const NavLinks = () => {
        return (<>

            <li className=" hover:text-green-300"><Link href="#Home">Home</Link></li>
            <li className=" hover:text-green-300"><Link href="#About">About</Link></li>
            <li className=" hover:text-green-300"><Link href="#Contact">Contact</Link></li>
        </>)
    }

    return (
        <>
            <nav >
                <div className="text-[#76ABAE] bg-[#222831] fixed  top-0 left-0 w-full">
                    <div className=" flex items-center h-48 sm:pt-4 ">
                        <div className="flex w-full lg:justify-start text-5xl  p-4">
                            ABHISHEK
                        </div>
                        <div className=" justify-end pr-8 hidden md:block ">
                            <ul className="flex gap-[4vw]">
                                <NavLinks />
                            </ul>
                        </div>
                        <div className="md:hidden  ">
                            <button onClick={toggleNavbar} className="fixed right-3 top-4">
                                {isOpen ? <X className=" hover:text-red-500"/> : 
                                <Menu className=" hover:text-green-300" />}

                            </button>
                        </div>
                        {
                            isOpen && (
                                <div className="md:hidden p-9" >
                                    <ul >
                                        <NavLinks /></ul>
                                </div>
                            )
                        }
                    </div>

                </div>


            </nav>

        </>
    )
}

export default NavBar
