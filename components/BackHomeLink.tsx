import Link from "next/link"
import Image from "next/image"
import backHomeIcon from "@/public/home-icon.svg"

export default function BackHomeLink() {
    return (
        <Link href="/">
            <Image
                src={backHomeIcon}
                alt="Back home icon"
            />
        </Link>
    )
}
