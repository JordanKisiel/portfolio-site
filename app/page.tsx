import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Photo from "@/components/Photo"
import ContactListLink from "@/components/ContactListLink"
import Flair from "@/components/Flair"
import flairData from "@/data/flair.json"
import rainbowArrow from "@/public/rainbow-arrow.svg"
import Arrow from "@/components/Arrow"
import PortfolioLink from "@/components/PortfolioLink"

export default function Home() {
    let piecesOfFlair = flairData.flair.map((piece) => {
        return (
            <Flair
                key={piece.textOptions.text}
                textOptions={piece.textOptions}
                iconOptions={piece.iconOptions}
                badgeOptions={piece.badgeOptions}
            />
        )
    })

    //add piece of flair that counts the total number of pieces
    piecesOfFlair = [
        ...piecesOfFlair,
        <Flair
            key="Pieces of Flair"
            textOptions={{
                text: "Pieces of Flair",
                subtext: "(Well below the minimum)",
                textColor: "text-red-100",
                textWidth: "w-full",
            }}
            iconOptions={{
                icon: piecesOfFlair.length + 1,
                iconAlt: "n/a",
                iconPosX: "-left-2",
                iconPosY: "-top-[3.5rem]",
                iconRotation: "-rotate-6",
            }}
            badgeOptions={{
                bgColor: "bg-red-400",
                badgeRotation: "-rotate-2",
                isIconFirst: true,
                leftSpacing: "w-[1rem]",
                rightSpacing: "w-[0.5rem]",
            }}
        />,
    ]

    return (
        <>
            <Nav />
            {/* Intro */}
            <div className="flex flex-col items-center pt-20 gap-5 mb-10">
                <IntroText width={220} />
                <Photo />
                <p className="flex flex-col items-center font-abhaya text-neutral-900 text-center">
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
            <div className="flex flex-col items-center mx-5 gap-5 mb-40">
                <h2 className="font-outfit text-neutral-900 text-5xl text-center mb-5">
                    About Me
                </h2>
                {piecesOfFlair}
            </div>

            {/* Porfolio */}
            <div className="mx-5">
                <div
                    className="flex flex-col items-center bg-[url('../public/portfolio-bg.svg')] bg-no-repeat 
                                pt-3 pb-20 bg-top mb-10"
                >
                    <h2 className="font-outfit text-neutral-900 text-4xl text-center mb-5">
                        Portfolio
                    </h2>
                    <Image
                        src={rainbowArrow}
                        alt="rainbow arrow pointing down"
                    />
                </div>
                {/* kanban project */}
                <div>
                    <h3
                        className="font-amiko text-neutral-900 text-2xl leading-6 text-center uppercase bg-neutral-100 
                                   rounded-[5px] shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] border-2 border-[#EFEFEF]
                                   pt-3 pb-2 mb-[0.625rem]"
                    >
                        Kanban Project Management Tool
                    </h3>
                    <div
                        className="rounded-[5px] overflow-hidden bg-[url('../public/kanban-mobile-thumb.png')] w-full h-48 
                                    bg-[length:80rem] bg-[-8rem_-3rem] mb-[0.625rem]"
                    ></div>

                    <div className="flex flex-row justify-between font-abhaya gap-[0.625rem] mb-[0.625rem]">
                        <div
                            className="flex flex-col justify-center items-center rounded-[5px] bg-neutral-100 w-1/2 py-[0.625rem]
                                        shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] border-2 border-[#EFEFEF]"
                        >
                            <p className="text-4xl">4700</p>
                            <p className="text-xl leading-[0.625rem]">LOC</p>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center rounded-[5px] bg-neutral-100 w-1/2 py-[0.625rem]
                                        shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] border-2 border-[#EFEFEF]"
                        >
                            <p className="text-4xl">200+</p>
                            <p className="text-xl leading-[0.625rem]">
                                Commits
                            </p>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col gap-[0.625rem]">
                        <PortfolioLink
                            url="https://jordan-kisiel-kanban.vercel.app/"
                            text="Live Site"
                            arrowColor="#F1D7D7"
                            bgColor="bg-red-400"
                            icon="bg-[url('../public/screen-icon.svg')]"
                            textColor="text-red-100"
                        />
                        <PortfolioLink
                            url="https://github.com/JordanKisiel/kanban-task-manager"
                            text="Github Repo"
                            arrowColor="#E2ECEF"
                            bgColor="bg-blue-400"
                            icon="bg-[url('../public/repo-icon.svg')]"
                            textColor="text-blue-100"
                        />
                        {/* TODO: add Detailed Breakdown Link */}
                        <PortfolioLink
                            url="https://github.com/JordanKisiel/kanban-task-manager"
                            text="Github Repo"
                            arrowColor="#E2ECEF"
                            bgColor="bg-blue-400"
                            icon="bg-[url('../public/repo-icon.svg')]"
                            textColor="text-blue-100"
                        />
                    </div>
                </div>
            </div>

            {/* texture overlay */}
            {/* pointer-events-none allows clicks through the overlay */}
            <div className="fixed inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-5 pointer-events-none"></div>
        </>
    )
}
