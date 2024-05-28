import Image from "next/image"
import BackHomeLink from "@/components/BackHomeLink"
import CroppedImage from "@/components/CroppedImage"
import BackToTopButton from "@/components/BackToTopButton"
import TextureOverlay from "@/components/TextureOverlay"
import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import LabeledContainer from "@/components/LabeledContainer"
import FeaturesList from "@/components/FeaturesList"
import FeaturesListItem from "@/components/FeaturesListItem"
import TechUsed from "@/components/TechUsed"
import nextLogo from "@/public/next-logo.svg"
import typescriptLogo from "@/public/typescript-logo.svg"
import tailwindLogo from "@/public/tailwind-logo.svg"
import socketIOLogo from "@/public/socket-io-logo.svg"
import expressLogo from "@/public/express-logo.svg"
import gsapLogo from "@/public/gsap-logo.svg"
import decisionTreeDiagram from "@/public/decision-tree-diagram.svg"
import serverClientDiagram from "@/public/server-client-diagram.svg"
import CodeHightlight from "@/components/CodeHighlight"
import gameStateDiagram from "@/public/game-state-diagram.svg"
import formulaDiagram from "@/public/connect-four-formula-diagram.svg"

export default function Page() {
    return (
        <main className="w-full px-5 pt-5 overflow-x-hidden">
            <BackHomeLink />
            <div className="flex flex-col gap-5 mb-10">
                <h1 className="font-outfit text-center mt-10">
                    <span className="block text-[4rem] leading-[3.5rem]">
                        Connect Four
                    </span>
                    <span className="text-xl">
                        Player vs AI & <br /> Online 2 Player
                    </span>
                </h1>
                <CroppedImage
                    image="bg-[url('../public/connect-four-game.png')]"
                    imageSize="bg-[length:110%]"
                    imagePosition="bg-[35%_35%]"
                    height="h-48"
                />
            </div>
            <div className="mb-5">
                <Heading
                    alignment="text-center"
                    highlightIndices={[10]}
                    highlightColor="text-red-400"
                >
                    What is it?
                </Heading>
                <Paragraph alignment="text-left">
                    This project is my web app implementation of the classic
                    Connect Four game. It consists of a frontend client made
                    with Next.js and a backend game server made with Express. It
                    allows for single player against an AI and online two
                    player.
                </Paragraph>
            </div>
            <div className="mb-20">
                <LabeledContainer
                    label="Features"
                    textColor="text-blue-100"
                    bgColor="bg-blue-400"
                >
                    <FeaturesList>
                        <>
                            <FeaturesListItem>
                                AI with 3 difficulties
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Online 2 player with 3 lobbies
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Move timer in 2 player
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Ability to rejoin online game
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Animated menus and moves
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Responsive design for mobile, tablet, and
                                desktop
                            </FeaturesListItem>
                        </>
                    </FeaturesList>
                </LabeledContainer>
                <LabeledContainer
                    label="Tech Used"
                    textColor="text-orange-100"
                    bgColor="bg-orange-400"
                >
                    <div className="grid grid-cols-3 w-full gap-5">
                        <TechUsed
                            logo={nextLogo}
                            logoSize={60}
                            logoAlt="Next.js logo"
                            label="Framework"
                        />
                        <TechUsed
                            logo={typescriptLogo}
                            logoSize={30}
                            logoAlt="Typescript logo"
                            label="Language"
                        />
                        <TechUsed
                            logo={socketIOLogo}
                            logoSize={60}
                            logoAlt="Socket.io logo"
                            label="Websockets"
                        />
                        <TechUsed
                            logo={expressLogo}
                            logoSize={50}
                            logoAlt="Express logo"
                            label="Backend"
                        />
                        <TechUsed
                            logo={gsapLogo}
                            logoSize={40}
                            logoAlt="GSAP logo"
                            label="Animation"
                        />
                        <TechUsed
                            logo={tailwindLogo}
                            logoSize={70}
                            logoAlt="Tailwind logo"
                            label="Styling"
                        />
                    </div>
                </LabeledContainer>
            </div>
            <div className="flex flex-col gap-3 mb-20">
                <Heading
                    alignment="text-center"
                    highlightIndices={[6, 7]}
                    highlightColor="text-pink-400"
                >
                    Major UI Components
                </Heading>
                <CroppedImage
                    image="bg-[url('../public/connect-four-menu.png')]"
                    imageSize="bg-[length:100%]"
                    imagePosition="bg-[0%_0%]"
                    imageOpacity="opacity-60"
                    height="h-[23rem]"
                    colorOverlay="bg-orange-400"
                />
                <CroppedImage
                    image="bg-[url('../public/connect-four-lobby.png')]"
                    imageSize="bg-[length:100%]"
                    imagePosition="bg-[0%_0%]"
                    imageOpacity="opacity-60"
                    height="h-[32.5rem]"
                    colorOverlay="bg-blue-400"
                />
                <CroppedImage
                    image="bg-[url('../public/connect-four-game.png')]"
                    imageSize="bg-[length:101%]"
                    imagePosition="bg-[0%_0%]"
                    imageOpacity="opacity-60"
                    height="h-[36rem]"
                    colorOverlay="bg-red-400"
                />
            </div>
            <div className="flex flex-col gap-3 mb-20">
                <Heading
                    alignment="text-center"
                    highlightIndices={[4, 5]}
                    highlightColor="text-purple-400"
                >
                    The AI
                </Heading>
                <Paragraph alignment="text-left">
                    The computer player uses a typical minimax algorithm for
                    turn-based, perfect information games. It searches to a
                    depth of 4 moves ahead and saves the best 3 moves as scored
                    by the evaluation function.
                </Paragraph>
                <Image
                    className="my-10"
                    src={decisionTreeDiagram}
                    alt="Minimax decision tree diagram"
                />
                <Paragraph alignment="text-left">
                    The main design goal of the AI was to make it feel like a
                    fairly good but human player. To this end, I increased the
                    odds of the AI choosing one of the sub-optimal saved moves
                    as a function of the number of moves that had been made to
                    that point. This had the dual effect of: 1) decreasing the
                    occurrences of sub-optimal moves in the early game (which,
                    in Connect Four, generally just means an automatic and unfun
                    win for the player) and 2) increasing the occurrence of
                    mistakes as the board state becomes more complex (which is
                    generally expected from a human player).
                </Paragraph>
            </div>

            <div className="flex flex-col gap-3 mb-20">
                <Heading
                    alignment="text-center"
                    highlightIndices={[7]}
                    highlightColor="text-red-400"
                >
                    Online 2 Player
                </Heading>
                <Paragraph alignment="text-left">
                    Websockets were chosen over normal http requests for
                    communication of game state between clients and the server
                    due to their low latency nature. Socket.io was mostly chosen
                    for its simpler API but it was nice to have automatic
                    fallback to long polling and reconnections as additional
                    features.
                </Paragraph>
                <Image
                    className="my-5"
                    src={serverClientDiagram}
                    alt="Diagram showing that the game server is the source of truth for clients"
                />
                <Paragraph alignment="text-left">
                    The game server is responsible for maintaining game state
                    (being the one source of truth for both players), adding
                    players to lobbies, keeping track of move timers, and
                    allowing players to rejoin lobbies in case of disconnection.
                </Paragraph>
            </div>

            <div className="mb-20">
                <CodeHightlight title="Game State">
                    <>
                        <Paragraph alignment="text-left">
                            My initial attempt at implementing game state (and
                            the transitions between those states) resulted in
                            many conditionals that grew both in complexity and
                            in number across my code. It quickly became
                            impossible to understand what was happening so I
                            re-wrote the code using a State pattern.
                        </Paragraph>
                        <Image
                            className="my-5"
                            src={gameStateDiagram}
                            alt="Diagram showing basic state structure and delegation of 
                                 behavior to concrete states which all implement the abstract GameState"
                        />
                        <Paragraph alignment="text-left">
                            The GameContext utilizes an abstract GameState
                            object which delegates the behavior to one of four
                            different concrete implementations (see diagram
                            above). The concrete states trigger transitions to
                            other states by using their reference to the
                            GameContext object; depending on the current state
                            and action. For instance, adding a player to a game
                            in the Inactive state triggers a transition to the
                            Waiting state, but adding a player in the Waiting
                            state triggers a transition to the InProgress state.
                        </Paragraph>
                    </>
                </CodeHightlight>
            </div>

            <div className="flex flex-col mb-20 gap-3">
                <Heading
                    alignment="text-center"
                    highlightColor="text-orange-400"
                    highlightIndices={[3]}
                >
                    Animation
                </Heading>
                <CroppedImage
                    image="bg-[url('../public/connect-four-menu-anim.gif')]"
                    imageSize="bg-[length:100%]"
                    imagePosition="bg-[0%_0%]"
                    height="h-[30rem]"
                />
                <Paragraph alignment="text-left">
                    Most parts of the app are animated to reinforce the idea of
                    a fun and light-hearted experience. I chose GSAP as the
                    animation framework because I had only used Framer Motion
                    before and wanted to try something different. Overall, I
                    ended up preferring GSAP as it was easier to simply drop
                    some animation code into pre-existing components without
                    major changes. Additionally, the timeline API makes it very
                    simple to create staggered and delayed animations.
                </Paragraph>
            </div>

            <div className="mb-20">
                <CodeHightlight title="Disk Drop Animations">
                    <>
                        <CroppedImage
                            image="bg-[url('../public/connect-four-disc-drop.gif')]"
                            imageSize="bg-[length:100%]"
                            imagePosition="bg-[0%_38%]"
                            height="h-[17rem]"
                        />
                        <Paragraph alignment="text-left">
                            Animating the disks dropping into the board, as
                            players made their moves, provided an extra
                            challenge, as the end point of the animation (where
                            the disk ended up on the board) was dynamic and
                            dependent on the number of discs that were already
                            in that column.
                        </Paragraph>
                        <Image
                            className="my-10"
                            src={formulaDiagram}
                            alt="Diagram showing how the end point of the disc drop animation was derived"
                        />
                        <Paragraph alignment="text-left">
                            Drawing out the problem made it much easier to
                            derive the formula needed to calculate the end
                            point.
                        </Paragraph>
                    </>
                </CodeHightlight>
            </div>

            <BackToTopButton />

            <TextureOverlay />
        </main>
    )
}
