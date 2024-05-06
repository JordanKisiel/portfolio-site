import Image from "next/image"
import intro from "@/public/intro.svg"
import Nav from "@/components/Nav"

export default function Home() {
    return (
        <>
            <Nav />
            <div className="p-10">
                {/* TODO: turn image into component */}
                {/* TODO: also lookup why it's aliased */}
                <Image
                    src={intro}
                    alt="Hi, I'm Jordan"
                />
            </div>
            {/* texture overaly */}
            {/* pointer-events-none allows clicks through the overlay */}
            <div className="absolute inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-5 pointer-events-none"></div>
        </>
    )
}
