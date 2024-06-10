import Image from "next/image"
import picOfMe from "@/public/pic-of-me.png"

export default function Photo() {
    return (
        <div
            className="rounded-full border-[6px] bg-no-repeat bg-[url('../public/pic-of-me.png')] 
                     border-neutral-900 drop-shadow-[6px_6px_0px_rgba(22,22,22,1)] w-[8rem] 
                     aspect-square bg-[-5rem_-0.5rem] bg-[length:15rem]"
        ></div>
    )
}
