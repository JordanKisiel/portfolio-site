"use client"

import BackToTopIcon from "@/components/BackToTopIcon"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { useEffect, useState } from "react"

export default function BackToTopButton() {
    //isTopOfWindow flag used to prevent the button from being
    //disabled until the top of the window is reached
    //otherwise, the scroll to top animation stops before reaching
    //the top
    const [isTopOfWindow, setIsTopOfWindow] = useState(true)
    const { scrollPosition } = useScrollPosition()

    useEffect(() => {
        setIsTopOfWindow(scrollPosition === 0)
    }, [scrollPosition])

    function handleClick() {
        setIsTopOfWindow(true)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <button
            onClick={(e) => handleClick()}
            className={`fixed left-5 bottom-5 ${
                scrollPosition > 2400
                    ? "transition-opacity duration-1000"
                    : "opacity-0"
            }`}
            disabled={scrollPosition <= 2400 && isTopOfWindow}
        >
            <BackToTopIcon
                foregroundColor="#161616"
                foregroundOpacity={0.25}
                backgroundColor="#E2ECEF"
            />
        </button>
    )
}
