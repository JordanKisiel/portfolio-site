"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const navContainer = useRef<HTMLElement>(null)

    console.log(isOpen)

    function toggleOpen(isOpen: boolean) {
        setIsOpen((prevValue) => !prevValue)

        if (isOpen) {
            //close animation
            gsap.to(navContainer.current, {
                height: 0,
            })
        } else {
            //open animation
            gsap.to(navContainer.current, {
                height: "100%",
            })
        }
    }

    //stop scrolling when nav is open
    useEffect(() => {
        if (isOpen) {
            document.querySelector("body")?.classList.add("overflow-y-hidden")
            document.querySelector("body")?.classList.remove("overflow-scroll")
        } else {
            document.querySelector("body")?.classList.add("overflow-scroll")
            document
                .querySelector("body")
                ?.classList.remove("overflow-y-hidden")
        }
    }, [isOpen])

    return (
        <div>
            <button
                onClick={() => toggleOpen(isOpen)}
                className={`absolute right-5 top-5 bg-no-repeat w-[2.25rem] pb-4 z-20 ${
                    isOpen
                        ? "bg-[url('../public/hamburger-close-icon.svg')]"
                        : "bg-[url('../public/hamburger-icon.svg')]"
                } `}
            >
                <span className="invisible text-[1px]">Open nav menu</span>
            </button>
            <nav
                ref={navContainer}
                className={`fixed inset-0 flex flex-col items-center justify-center bg-red-400
                                font-amiko text-2xl uppercase text-neutral-900 overflow-hidden h-0 z-10`}
            >
                <ul className="flex flex-col gap-3">
                    <li>
                        <a
                            onClick={() => toggleOpen(isOpen)}
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => toggleOpen(isOpen)}
                            href="#about"
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => toggleOpen(isOpen)}
                            href="#portfolio"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
