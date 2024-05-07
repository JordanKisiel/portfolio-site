import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Photo from "@/components/Photo"
import ContactListLink from "@/components/ContactListLink"
import novaIcon from "@/public/nova.svg"
import tagsIcon from "@/public/tags.svg"
import homerIcon from "@/public/homer.svg"
import foobarIcon from "@/public/foobar.svg"
import waterIcon from "@/public/water.svg"
import Flair from "@/components/Flair"

export default function Home() {
    return (
        <>
            <Nav />
            {/* Intro */}
            <div className="flex flex-col items-center pt-20 gap-5 mb-10">
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

            {/* Contact */}
            <div className="mb-20">
                <div className="bg-blue-400 mx-5 rounded-[5px] -rotate-[3deg]">
                    <div className="bg-red-400 rounded-[5px] rotate-[7deg]">
                        <ul
                            className="flex flex-col font-abhaya font-semibold text-lg bg-blue-100 p-5 
                                      rounded-[5px] gap-5 -rotate-[4deg]"
                        >
                            {/* TODO: also consider making this link copy the email address for pasting? */}
                            <ContactListLink
                                bgIcon="bg-[url('../public/email-icon.svg')]"
                                linkUrl="mailto:jordan.kisiel@gmail.com"
                                text="jordan.kisiel@gmail.com"
                            />
                            <ContactListLink
                                bgIcon="bg-[url('../public/linkedin-icon.svg')]"
                                linkUrl="https://linkedin.com/in/jordan-kisiel-b60129114"
                                text="Linkedin"
                            />
                            <ContactListLink
                                bgIcon="bg-[url('../public/github-icon.svg')]"
                                linkUrl="https://github.com/JordanKisiel"
                                text="Github"
                            />
                            {/* TODO: add google doc link to resume */}
                            <ContactListLink
                                bgIcon="bg-[url('../public/resume-icon.svg')]"
                                linkUrl="#"
                                text="Resume (on Google Docs)"
                            />
                        </ul>
                    </div>
                </div>
            </div>

            {/* About Me */}
            <div className="flex flex-col items-center mx-5 gap-5">
                <h2 className="font-outfit text-5xl text-center mb-5">
                    About Me
                </h2>
                {/* Pieces of flair */}
                {/* TODO: create flair programmatically from external json file */}
                <Flair
                    textOptions={{
                        text: "Nova Based",
                        textColor: "text-purple-100",
                        textWidth: "w-1/3",
                    }}
                    iconOptions={{
                        icon: novaIcon,
                        iconAlt: "Northern Virginia icon",
                        iconRotation: "-rotate-3",
                        iconPosX: "-left-6",
                        iconPosY: "-top-5",
                    }}
                    badgeOptions={{
                        bgColor: "bg-purple-400",
                        leftSpacing: "w-[1rem]",
                        rightSpacing: "w-[0rem]",
                        badgeRotation: "rotate-3",
                        isIconFirst: true,
                    }}
                />
                <Flair
                    textOptions={{
                        text: "React Pro",
                        textColor: "text-red-100",
                        textWidth: "w-2/3",
                    }}
                    iconOptions={{
                        icon: tagsIcon,
                        iconAlt: "Code tags icon",
                        iconRotation: "rotate-0",
                        iconPosX: "-right-1",
                        iconPosY: "-top-5",
                    }}
                    badgeOptions={{
                        bgColor: "bg-red-400",
                        leftSpacing: "w-[0rem]",
                        rightSpacing: "w-[1rem]",
                        badgeRotation: "-rotate-1",
                        isIconFirst: false,
                    }}
                />
                <Flair
                    textOptions={{
                        text: "Simpsons Quoter",
                        textColor: "text-pink-100",
                        textWidth: "w-1/2",
                    }}
                    iconOptions={{
                        icon: homerIcon,
                        iconAlt: "Homer Simpson head icon",
                        iconRotation: "-rotate-3",
                        iconPosX: "-right-0",
                        iconPosY: "-top-[3.6rem]",
                    }}
                    badgeOptions={{
                        bgColor: "bg-pink-400",
                        leftSpacing: "w-[0.5rem]",
                        rightSpacing: "w-[0.5rem]",
                        badgeRotation: "rotate-2",
                        isIconFirst: false,
                    }}
                />
                <Flair
                    textOptions={{
                        text: "Google Foobar Challenger",
                        textColor: "text-orange-100",
                        textWidth: "w-full",
                    }}
                    iconOptions={{
                        icon: foobarIcon,
                        iconAlt: "Google Foobar Challenge icon",
                        iconRotation: "-rotate-3",
                        iconPosX: "-left-12",
                        iconPosY: "-top-3",
                    }}
                    badgeOptions={{
                        bgColor: "bg-orange-400",
                        leftSpacing: "w-[0rem]",
                        rightSpacing: "w-[0rem]",
                        badgeRotation: "-rotate-3",
                        isIconFirst: true,
                    }}
                />
                <Flair
                    textOptions={{
                        text: "Beginner Rower",
                        textColor: "text-blue-100",
                        textWidth: "w-2/3",
                    }}
                    iconOptions={{
                        icon: waterIcon,
                        iconAlt: "Water icon",
                        iconRotation: "-rotate-0",
                        iconPosX: "-right-2",
                        iconPosY: "-top-0",
                    }}
                    badgeOptions={{
                        bgColor: "bg-blue-400",
                        leftSpacing: "w-[0rem]",
                        rightSpacing: "w-[2rem]",
                        badgeRotation: "rotate-2",
                        isIconFirst: false,
                    }}
                />
            </div>

            {/* texture overlay */}
            {/* pointer-events-none allows clicks through the overlay */}
            <div className="fixed inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-5 pointer-events-none"></div>
        </>
    )
}
