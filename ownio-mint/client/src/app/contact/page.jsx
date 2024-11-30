"use client";

import RetroGrid from "@/components/ui/retro-grid";
import Link from "next/link";

export default function RetroGridDemo() {
    const handleMailClick = (e) => {
        e.preventDefault();
        window.location.href = "mailto:techjantaparty@gmail.com";
    };

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            {/* Active Email */}
            <Link
                href="#"
                onClick={handleMailClick}
                className="pointer-events-auto z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center sm:text-4xl text-2xl py-10 font-bold leading-none tracking-tighter text-transparent hover:underline focus:underline"
            >
                techjantaparty@gmail.com
            </Link>

            <RetroGrid />
        </div>
    );
}
