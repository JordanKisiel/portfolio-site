import Image from "next/image"
import picOfMe from "@/public/pic-of-me.png"

export default function Photo() {
    return (
        <div className="rounded-full overflow-hidden border-[6px] border-neutral-900 drop-shadow-[6px_6px_0px_rgba(22,22,22,1)]">
            <div className="absolute inset w-full h-full bg-gradient-to-r from-orange-400 via-blue-400 to-pink-400 to-50% opacity-75 mix-blend-hue z-10"></div>
            <Image
                className="absolute inset-0 blur-[10px] opacity-50 mix-blend-darken"
                src={picOfMe}
                alt="Photograph of Jordan Kisiel's face"
                priority={true}
            />
            <Image
                src={picOfMe}
                alt="Photograph of Jordan Kisiel"
            />
        </div>
    )
}
