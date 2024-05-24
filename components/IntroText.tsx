import Image from "next/image"
import mobileIntroText from "@/public/mobile-intro-text.svg"
import IntroClipPath from "@/components/IntroClipPath"

type Props = {
    width: number
}

export default function IntroText({ width }: Props) {
    return (
        <div className="relative flex flex-row justify-center items-center">
            <Image
                className=""
                src={mobileIntroText}
                alt="Hi, I'm Jordan"
            />
            <div className="absolute -top-[0.35rem] -left-[0.4rem] introContainer  w-[15rem] h-[12rem] -z-10">
                <IntroClipPath />
            </div>
        </div>
    )
}
