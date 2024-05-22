"use client"

import { useState } from "react"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
        setIsOpen((prevValue) => !prevValue)
    }

    return (
        <div className="fixed inset-0 z-10">
            <button
                onClick={() => toggleOpen()}
                className={`absolute right-5 top-5 bg-no-repeat w-[2.25rem] pb-4 z-10 ${
                    isOpen
                        ? "bg-[url('../public/hamburger-close-icon.svg')]"
                        : "bg-[url('../public/hamburger-icon.svg')]"
                } `}
            >
                <span className="invisible text-[1px]">Open nav menu</span>
            </button>
            {isOpen && (
                <nav
                    className="absolute inset-0 flex flex-col items-center justify-center bg-red-400 py-[80px]
                                font-amiko text-2xl uppercase text-neutral-900"
                >
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
