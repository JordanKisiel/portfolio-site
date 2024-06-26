import Image from "next/image"
import mobileIntroText from "@/public/mobile-intro-text.svg"
import IntroClipPath from "@/components/IntroClipPath"

export default function IntroText() {
    return (
        <div className="relative flex flex-row justify-center items-center">
            <picture className="opacity-75">
                <source
                    srcSet="desktop-large-intro.svg"
                    media="(min-width: 1350px)"
                    width={590}
                />
                <source
                    srcSet="desktop-intro.svg"
                    media="(min-width: 768px)"
                    width={378}
                />
                <Image
                    className=""
                    src={mobileIntroText}
                    alt="Hi, I'm Jordan"
                />
            </picture>
            <div
                className="absolute -top-[0.35rem] -left-[0.4rem] introContainer w-[15rem] h-[12rem]
                            -z-10 tb:w-[30rem] tb:h-[15rem] tb:-left-[0.2rem] tb:-top-[0.15rem]
                            dt:w-[40rem] dt:h-[20rem] dt:-left-[0.4rem] dt:-top-[0.2rem]"
            >
                <IntroClipPath />
            </div>
        </div>
    )
}
