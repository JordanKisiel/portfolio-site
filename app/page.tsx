import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Photo from "@/components/Photo"

export default function Home() {
    return (
        <>
            <Nav />
            {/* Intro Section */}
            <div className="flex flex-col items-center pt-20 gap-5">
                <IntroText width={220} />
                <Photo />
                <p className="flex flex-col items-center font-abhaya text-center">
                    <span className="block text-2xl font-bold leading-9">
                        a
                    </span>
                    <span className="block text-2xl font-bold w-4/5 leading-6">
                        Fullstack Web Developer
                    </span>
                    <span className="block text-[1rem] font-bold leading-8">
                        (among other things)
                    </span>
                </p>
            </div>

            {/* texture overaly */}
            {/* pointer-events-none allows clicks through the overlay */}
            <div className="absolute inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-5 pointer-events-none"></div>
        </>
    )
}
