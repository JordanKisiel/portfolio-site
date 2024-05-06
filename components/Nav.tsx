"use client"

import { useState } from "react"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
        setIsOpen((prevValue) => !prevValue)
    }

    return (
        <div className="absolute inset-x-0 top-0">
            <button
                onClick={() => toggleOpen()}
                className={`absolute right-5 top-5 bg-no-repeat pb-4 ${
                    isOpen
                        ? "bg-[url('../public/hamburger-close-icon.svg')]"
                        : "bg-[url('../public/hamburger-icon.svg')]"
                } `}
            >
                <span className="invisible text-[1px]">Open nav menu</span>
            </button>
            {isOpen && (
                <nav className="flex flex-col items-center justify-center w-full bg-red-400 py-[80px] font-amiko text-2xl uppercase text-neutral-900">
                    <ul className="flex flex-col gap-3">
                        <li>Contact</li>
                        <li>Portfolio</li>
                        <li>Resume</li>
                    </ul>
                </nav>
            )}
        </div>
    )
}
