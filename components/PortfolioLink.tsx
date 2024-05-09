import Link from "next/link"
import Arrow from "@/components/Arrow"

type Props = {
    url: string
    text: string
    textColor: string
    icon: string
    arrowColor: string
    bgColor: string
    isBig?: boolean
}

export default function ({
    url,
    text,
    textColor,
    icon,
    arrowColor,
    bgColor,
    isBig,
}: Props) {
    return (
        <Link
            className={`rounded-[5px] bg-no-repeat bg-[center_left_1rem] block 
                                   border-2 border-neutral-900 drop-shadow-[4px_4px_0px_rgba(22,22,22,1)] ${textColor}
                                   ${bgColor} ${icon}`}
            href={url}
        >
            <div className="flex flex-row justify-between items-center pl-[4.5rem] py-5 pr-3">
                <span className="font-abhaya text-[1.75rem]">{text}</span>
                <Arrow fill={arrowColor} />
            </div>
        </Link>
    )
}
