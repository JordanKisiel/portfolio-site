import { useEffect, useState } from "react"

export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener("scroll", updatePosition)

        //initial call
        updatePosition()

        return () => window.removeEventListener("scroll", updatePosition)
    }, [])

    return { scrollPosition, setScrollPosition }
}
