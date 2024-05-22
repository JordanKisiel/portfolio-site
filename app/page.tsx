import Image from "next/image"
import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Photo from "@/components/Photo"
import ContactListLink from "@/components/ContactListLink"
import Flair from "@/components/Flair"
import flairData from "@/data/flair.json"
import rainbowArrow from "@/public/rainbow-arrow.svg"
import PortfolioLink from "@/components/PortfolioLink"
import Project from "@/components/Project"
import TextureOverlay from "@/components/TextureOverlay"
import CroppedImage from "@/components/CroppedImage"

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
        <main className="relative overflow-x-hidden">
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
                            id="contact"
                        >
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
            <div
                className="flex flex-col items-center mx-5 gap-5 mb-40"
                id="about"
            >
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
                    id="portfolio"
                >
                    <h2 className="font-outfit text-neutral-900 text-4xl text-center mb-5">
                        Portfolio
                    </h2>
                    <Image
                        src={rainbowArrow}
                        alt="rainbow arrow pointing down"
                    />
                </div>

                <Project
                    title="Kanban Project Management Tool"
                    thumbnail={
                        <CroppedImage
                            image="bg-[url('../public/kanban-mobile-thumb.png')]"
                            imageSize="bg-[length:80rem]"
                            imagePosition="bg-[-8rem_-3rem]"
                            height="h-[12rem]"
                        />
                    }
                    linesOfCode={4700}
                    numOfCommits={200}
                    portfolioLinks={
                        <>
                            <PortfolioLink
                                url="https://jordan-kisiel-kanban.vercel.app/"
                                text="Live Site"
                                textSize="text-[1.75rem]"
                                arrowColor="#F1D7D7"
                                bgColor="bg-red-400"
                                icon="bg-[url('../public/screen-icon.svg')]"
                                textColor="text-red-100"
                                bgSize="bg-[length:2.25rem]"
                            />
                            <PortfolioLink
                                url="https://github.com/JordanKisiel/kanban-task-manager"
                                text="Github Repo"
                                textSize="text-[1.75rem]"
                                arrowColor="#E2ECEF"
                                bgColor="bg-blue-400"
                                icon="bg-[url('../public/repo-icon.svg')]"
                                textColor="text-blue-100"
                                bgSize="bg-[length:2.3rem]"
                            />
                            <PortfolioLink
                                url="/kanban-breakdown"
                                text="Detailed Breakdown"
                                textSize="text-[1.5rem]"
                                arrowColor="#F1E0E8"
                                bgColor="bg-pink-400"
                                icon="bg-[url('../public/detailed-breakdown-icon.svg')]"
                                textColor="text-pink-100"
                                bgSize="bg-[length:2rem]"
                            />
                        </>
                    }
                />

                <Project
                    title="Connect Four: AI & Online 2 Player"
                    thumbnail={
                        <CroppedImage
                            image="bg-[url('../public/connect-four-mobile-thumb.png')]"
                            imageSize="bg-[length:38rem]"
                            imagePosition="bg-[-9rem_-11rem]"
                            height="h-[12rem]"
                        />
                    }
                    linesOfCode={4000}
                    numOfCommits={100}
                    portfolioLinks={
                        <>
                            <PortfolioLink
                                url="https://connect-four-next-client.vercel.app/"
                                text="Live Site"
                                textSize="text-[1.75rem]"
                                arrowColor="#F1D7D7"
                                bgColor="bg-red-400"
                                icon="bg-[url('../public/screen-icon.svg')]"
                                textColor="text-red-100"
                                bgSize="bg-[length:2.25rem]"
                            />
                            <PortfolioLink
                                url="https://github.com/JordanKisiel/connect-four-next"
                                text="Client Repo"
                                textSize="text-[1.75rem]"
                                arrowColor="#E2ECEF"
                                bgColor="bg-blue-400"
                                icon="bg-[url('../public/repo-icon.svg')]"
                                textColor="text-blue-100"
                                bgSize="bg-[length:2.3rem]"
                            />
                            <PortfolioLink
                                url="https://github.com/JordanKisiel/connect-four-next-server"
                                text="Server Repo"
                                textSize="text-[1.75rem]"
                                arrowColor="#F1E0E8"
                                bgColor="bg-orange-400"
                                icon="bg-[url('../public/server-icon.svg')]"
                                textColor="text-orange-100"
                                bgSize="bg-[length:2.3rem]"
                            />
                            <PortfolioLink
                                url="/connect-four-breakdown"
                                text="Detailed Breakdown"
                                textSize="text-[1.5rem]"
                                arrowColor="#F1E0E8"
                                bgColor="bg-pink-400"
                                icon="bg-[url('../public/detailed-breakdown-icon.svg')]"
                                textColor="text-pink-100"
                                bgSize="bg-[length:2rem]"
                            />
                        </>
                    }
                />
            </div>

            <TextureOverlay />
        </main>
    )
}
