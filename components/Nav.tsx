"use client"

import { useWindowSize } from "@uidotdev/usehooks"
import DesktopNav from "@/components/DesktopNav"
import MobileNav from "@/components/MobileNav"

export default function Nav() {
    const { width } = useWindowSize()

    if (width === null) {
        return <></>
    }

    return <>{width >= 768 ? <DesktopNav /> : <MobileNav />}</>
}
