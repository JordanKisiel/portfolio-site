// base code from:
// https://stackoverflow.com/questions/60642486/react-hooks-useeffect-update-window-innerheight

import { useState, useEffect } from "react"

export function useWindow() {
    const [windowWidth, setWindowWidth] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)

    const windowType = typeof window

    useEffect(() => {
        const updateWindowDimensions = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }

        if (windowType !== "undefined") {
            window.addEventListener("resize", updateWindowDimensions)
        }

        return () => {
            window.removeEventListener("resize", updateWindowDimensions)
        }
    }, [windowType])

    return { windowWidth, windowHeight }
}
