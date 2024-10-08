import MainContainer from "@/components/MainContainer"
import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Photo from "@/components/Photo"
import ContactListLink from "@/components/ContactListLink"
import Flair from "@/components/Flair"
import flairData from "@/data/flair.json"
import PortfolioLink from "@/components/PortfolioLink"
import Project from "@/components/Project"
import TextureOverlay from "@/components/TextureOverlay"
import CroppedImage from "@/components/CroppedImage"
import RainbowArrow from "@/components/RainbowArrow"

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
                iconPosX: "-left-2 tb:left-0 dt:-left-1",
                iconPosY: "-top-[3.5rem] dt:-top-[5rem]",
                iconRotation: "-rotate-6",
            }}
            badgeOptions={{
                bgColor: "bg-red-400",
                badgeRotation: "-rotate-2 tb:rotate-[12deg]",
                isIconFirst: true,
                leftSpacing: "ml-[1rem] tb:ml-[1.5rem]",
                rightSpacing: "mr-[0.5rem] tb:mr-[0rem]",
                order: "order-last",
                alignment: "tb:justify-self-end",
            }}
        />,
    ]

    return (
        <MainContainer>
            <>
                <Nav />
                {/* Intro */}
                <div className="flex flex-col items-center pt-20 gap-5 mb-10 tb:mt-[6.25rem] tb:relative dt:mb-20">
                    <IntroText />
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
                <div className="mb-20 tb:w-3/5 tb:max-w-[30rem] tl:w-4/5 tl:max-w-[45rem] dt:max-w-[58rem] dt:mb-32">
                    <div className="bg-blue-400 rounded-[5px] -rotate-[3deg] tl:px-3 tl:-rotate-[2deg]">
                        <div className="bg-red-400 rounded-[5px] rotate-[7deg] tl:px-2 tl:rotate-[4deg]">
                            <ul
                                className="flex flex-col font-abhaya text-xl sm:text-2xl leading-5 bg-blue-100 p-5 
                                      rounded-[5px] gap-8 -rotate-[4deg] tl:flex-row tl:text-xl tl:justify-between tl:px-8
                                      tl:-rotate-[2deg]"
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
                                    linkUrl="https://drive.google.com/file/d/1UxegxtubC-oYkjqaAuzt1DkWUixF_5Px/view?usp=sharing"
                                    text="Resume"
                                />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <div
                    className="flex flex-col items-center gap-5 mb-40 tb:absolute tb:top-[7rem] 
                               tb:w-[95%] tb:max-w-[48rem] tb:grid tb:grid-cols-2 tb:min-h-[24rem]
                               dt:max-w-[70rem] dt:min-h-[30rem]"
                    id="about"
                >
                    <h2 className="font-outfit text-neutral-900 text-5xl text-center mb-5 tb:hidden">
                        About Me
                    </h2>
                    {piecesOfFlair}
                </div>

                {/* Porfolio */}
                <div className="tb:flex tb:flex-col items-center dt:max-w-[70rem]">
                    <div
                        className="flex flex-col items-center bg-[url('../public/portfolio-bg.svg')] bg-no-repeat 
                                pt-3 pb-20 bg-top mb-10 tb:mt-10 tb:mb-6 tb:w-full"
                        id="portfolio"
                    >
                        <h2 className="font-outfit text-neutral-900 text-4xl text-center mb-5">
                            Portfolio
                        </h2>
                        <RainbowArrow />
                    </div>

                    <Project
                        title="Kanban: Project Management Tool"
                        thumbnail={
                            <CroppedImage
                                image="bg-[url('../public/kanban-mobile-thumb.png')]"
                                imageSize="bg-[length:400%] tb:bg-[length:200%] dt:bg-[length:160%]"
                                imagePosition="bg-[13%_8%] tb:bg-[0%_0%] dt:bg-[5%_0%]"
                                aspect="aspect-[16/9]"
                                isAnimatedOverlay={true}
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
                                    textSize="text-[1.75rem]"
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
                                imageSize="bg-[length:200%] tb:bg-[length:150%] dt:bg-[length:100%]"
                                imagePosition="bg-[45%_30%] tb:bg-[45%_40%] dt:bg-[45%_0%]"
                                aspect="aspect-[16/9]"
                                isAnimatedOverlay={true}
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
                                    textSize="text-[1.75rem]"
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
            </>
        </MainContainer>
    )
}
