import Image from "next/image"
import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import picOfMe from "@/public/pic-of-me.png"

export default function Home() {
    return (
        <>
            <Nav />
            <div className="flex flex-col items-center pt-20 gap-5">
                <IntroText width={220} />
                <div className="rounded-full overflow-hidden border-[6px] border-neutral-900 drop-shadow-[6px_6px_0px_rgba(22,22,22,1)]">
                    <div className="absolute inset w-full h-full bg-gradient-to-r from-orange-400 via-blue-400 to-pink-400 to-50% opacity-75 mix-blend-hue z-10"></div>
                    <Image
                        className="absolute inset-0 blur-[10px] opacity-50 mix-blend-darken"
                        src={picOfMe}
                        alt="Photograph of Jordan Kisiel's face"
                    />
                    <Image
                        src={picOfMe}
                        alt="Photograph of Jordan Kisiel's face"
                    />
                </div>
                <p className="flex flex-col items-center font-abhaya text-center">
                    <span className="block text-2xl font-bold leading-9">
                        a
                    </span>
                    <span className="block text-2xl font-bold w-4/5 leading-6">
                        Fullstack Web Developer
                    </span>
                    <span className="block text-[1rem] font-bold leading-8">
                        (amoung other things)
                    </span>
                </p>
            </div>
            {/* texture overaly */}
            {/* pointer-events-none allows clicks through the overlay */}
            <div className="absolute inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-5 pointer-events-none"></div>
        </>
    )
}
