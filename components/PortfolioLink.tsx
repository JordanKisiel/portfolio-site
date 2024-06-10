"use client"

import Link from "next/link"
import Arrow from "@/components/Arrow"

type Props = {
    url: string
    text: string
    textSize: string
    textColor: string
    icon: string
    arrowColor: string
    bgColor: string
    bgSize: string
}

export default function PortfolioLink({
    url,
    text,
    textSize,
    textColor,
    icon,
    arrowColor,
    bgColor,
    bgSize,
}: Props) {
    return (
        <Link
            className={`rounded-[5px] bg-no-repeat bg-[center_left_1rem] block 
                                   border-2 border-neutral-900 drop-shadow-[4px_4px_0px_rgba(22,22,22,1)] ${bgSize} ${textColor}
                                   ${bgColor} ${icon}`}
            href={url}
        >
            <div className="flex flex-row justify-between items-center pl-[4.5rem] py-3 pr-3 tl:py-2.5">
                <span
                    className={`block font-abhaya w-2/3 leading-6 ${textSize}`}
                >
                    {text}
                </span>
                <Arrow fill={arrowColor} />
            </div>
        </Link>
    )
}
