"use client";
import { useState } from "react";
import {
    FaHome,
    FaInfoCircle,
    FaPhoneAlt,
    FaComments,
    FaUserCircle,
    FaEarlybirds,
    FaBahai,
} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="bg-gray-900 text-white fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-t-3xl shadow-lg w-full sm:w-auto">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center">
                {/* Menu (Desktop and Mobile share same layout now) */}
                <div className="flex space-x-6">
                    <Link
                        href="/"
                        className={`relative group hover:text-blue-500`}
                        onClick={() => handleLinkClick("home")}
                    >
                        <FaHome className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Home
                        </span>
                    </Link>
                    <Link
                        href="/about"
                        className={`relative group hover:text-blue-500`}
                        onClick={() => handleLinkClick("about")}
                    >
                        <FaInfoCircle className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            About
                        </span>
                    </Link>
                    <Link
                        href="/mint"
                        className={`relative group hover:text-blue-500`}
                        onClick={() => handleLinkClick("mint")}
                    >
                        <FaEarlybirds className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Mint
                        </span>
                    </Link>
                    <Link
                        href="/testimonials"
                        className={`relative group hover:text-blue-500`}
                        onClick={() => handleLinkClick("testimonials")}
                    >
                        <FaComments className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Testimonials
                        </span>
                    </Link>
                    <Link
                        href="/profile"
                        className={`relative group hover:text-blue-500`}
                        onClick={() => handleLinkClick("profile")}
                    >
                        <FaUserCircle className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Profile
                        </span>
                    </Link>
                    <Link
                        href="/tech"
                        className={`relative group hover:text-blue-500`}
                        onClick={() => handleLinkClick("tech")}
                    >
                        <FaBahai className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Tech
                        </span>
                    </Link>
                    <Link
                        href="/contact"
                        className={`relative group hover:text-blue-500 ${activeLink === "contact" ? "text-blue-500" : ""
                            }`}
                        onClick={() => handleLinkClick("contact")}
                    >
                        <FaPhoneAlt className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
