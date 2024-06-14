import Image from "next/image"
import MainContainer from "@/components/MainContainer"
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
import BreakdownTitle from "@/components/BreakdownTitle"

export default function Page() {
    return (
        <MainContainer>
            <>
                <div className="w-full">
                    <BackHomeLink />
                </div>
                <div className="flex flex-col gap-5 mb-16 w-full tb:mb-24">
                    <BreakdownTitle
                        mainTitle="Connect Four"
                        subTitle="Player vs AI & Online 2 Player"
                    />
                    <CroppedImage
                        image="bg-[url('../public/connect-four-game.png')]"
                        imageSize="bg-[length:110%] tb:bg-[length:100%]"
                        imagePosition="bg-[35%_35%]"
                        aspect="aspect-[16/9]"
                    />
                </div>
                <div className="mb-16 tb:grid tb:grid-cols-2 tb:gap-12 dt:mb-28">
                    <div>
                        <Heading
                            alignment="text-center tb:text-left"
                            highlightIndices={[10]}
                            highlightColor="text-red-400"
                        >
                            What is it?
                        </Heading>
                        <Paragraph alignment="text-left">
                            This project is my web app implementation of the
                            classic Connect Four game. It consists of a frontend
                            client made with Next.js and a backend game server
                            made with Express. It allows for single player
                            against an AI and online two player.
                        </Paragraph>
                    </div>
                    <div className="hidden tb:block">
                        <CroppedImage
                            image="bg-[url('../public/connect-four-game.png')]"
                            imageSize="bg-[length:110%]"
                            imagePosition="bg-[35%_30%]"
                            aspect="aspect-[16/10]"
                        />
                    </div>
                </div>
                <div className="mb-16 w-full tb:grid tb:grid-cols-2 tb:gap-12 txl:gap-16 txl:mb-32">
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
                <div className="flex flex-col gap-3 mb-20 tb:max-w-[30rem] dt:max-w-[40rem]">
                    <div>
                        <Heading
                            alignment="text-center"
                            highlightIndices={[4, 5]}
                            highlightColor="text-purple-400"
                        >
                            The AI
                        </Heading>
                    </div>
                    <div>
                        <Paragraph alignment="text-left tb:text-center">
                            The computer player uses a typical minimax algorithm
                            for turn-based, perfect information games. It
                            searches to a depth of 4 moves ahead and saves the
                            best 3 moves as scored by the evaluation function.
                        </Paragraph>
                    </div>
                    <div>
                        <Image
                            className="my-10"
                            src={decisionTreeDiagram}
                            alt="Minimax decision tree diagram"
                        />
                    </div>
                    <div>
                        <Paragraph alignment="text-left tb:text-center">
                            The main design goal of the AI was to make it feel
                            like a fairly good but human player. To this end, I
                            increased the odds of the AI choosing one of the
                            sub-optimal saved moves as a function of the number
                            of moves that had been made to that point. This had
                            the dual effect of: 1) decreasing the occurrences of
                            sub-optimal moves in the early game (which, in
                            Connect Four, generally just means an automatic and
                            unfun win for the player) and 2) increasing the
                            occurrence of mistakes as the board state becomes
                            more complex (which is generally expected from a
                            human player).
                        </Paragraph>
                    </div>
                </div>

                <div
                    className="flex flex-col gap-3 mb-20 tb:grid tb:grid-cols-2 tb:gap-x-12 tb:gap-y-0
                                tb:max-w-[40rem] txl:gap-x-16 txl:mb-32 dt:max-w-[50rem]"
                >
                    <div className="tb:col-start-1 tb:col-end-3 tb:row-start-1 tb:row-end-2">
                        <Heading
                            alignment="text-center"
                            highlightIndices={[7]}
                            highlightColor="text-red-400"
                        >
                            Online 2 Player
                        </Heading>
                    </div>
                    <div className="tb:mb-3 tb:col-start-1 tb:col-end-2 tb:row-start-4 tb:row-end-6">
                        <Paragraph alignment="text-left">
                            Websockets were chosen over normal http requests for
                            communication of game state between clients and the
                            server due to their low latency nature. Socket.io
                            was mostly chosen for its simpler API but it was
                            nice to have automatic fallback to long polling and
                            reconnections as additional features.
                        </Paragraph>
                    </div>
                    <div className="tb:col-start-1 tb:col-end-3 tb:row-start-2 tb:row-end-4 tb:place-self-center tb:px-36 tb:mb-6">
                        <Image
                            className="my-5"
                            src={serverClientDiagram}
                            alt="Diagram showing that the game server is the source of truth for clients"
                        />
                    </div>
                    <div className="tb:col-start-2 tb:col-end-3 tb:row-start-4 tb:row-end-6 dt:place-self-center">
                        <Paragraph alignment="text-left">
                            The game server is responsible for maintaining game
                            state (being the one source of truth for both
                            players), adding players to lobbies, keeping track
                            of move timers, and allowing players to rejoin
                            lobbies in case of disconnection.
                        </Paragraph>
                    </div>
                </div>

                <div className="mb-20 tb:max-w-[45rem] dt:max-w-[50rem] dt:mb-32">
                    <CodeHightlight title="Game State">
                        <div className="tb:flex tb:flex-col tb:items-center">
                            <Paragraph alignment="text-left">
                                My initial attempt at implementing game state
                                (and the transitions between those states)
                                resulted in many conditionals that grew both in
                                complexity and in number across my code. It
                                quickly became impossible to understand what was
                                happening so I re-wrote the code using a State
                                pattern.
                            </Paragraph>
                            <Image
                                className="my-5 tb:my-10"
                                src={gameStateDiagram}
                                alt="Diagram showing basic state structure and delegation of 
                                 behavior to concrete states which all implement the abstract GameState"
                            />
                            <Paragraph alignment="text-left">
                                The GameContext utilizes an abstract GameState
                                object which delegates the behavior to one of
                                four different concrete implementations (see
                                diagram above). The concrete states trigger
                                transitions to other states by using their
                                reference to the GameContext object; depending
                                on the current state and action. For instance,
                                adding a player to a game in the Inactive state
                                triggers a transition to the Waiting state, but
                                adding a player in the Waiting state triggers a
                                transition to the InProgress state.
                            </Paragraph>
                        </div>
                    </CodeHightlight>
                </div>

                <div
                    className="flex flex-col mb-20 gap-3 tb:grid tb:grid-cols-8 tb:gap-y-0 tb:gap-x-12
                                dt:max-w-[55rem]"
                >
                    <div className="tb:col-start-1 tb:col-end-4 tb:row-start-1 tb:row-end-2">
                        <Heading
                            alignment="text-center tb:text-left"
                            highlightColor="text-orange-400"
                            highlightIndices={[3]}
                        >
                            Animation
                        </Heading>
                    </div>
                    <div className="tb:col-start-7 tb:col-end-12 tb:row-start-1 tb:row-end-6">
                        <CroppedImage
                            image="bg-[url('../public/connect-four-menu-anim.gif')]"
                            imageSize="bg-[length:100%]"
                            imagePosition="bg-[0%_25%]"
                            aspect="aspect-[16/22]"
                        />
                    </div>
                    <div className="tb:col-start-1 tb:col-end-7 tb:row-start-2 tb:row-end-3">
                        <Paragraph alignment="text-left">
                            Most parts of the app are animated to reinforce the
                            idea of a fun and light-hearted experience. I chose
                            GSAP as the animation framework because I had only
                            used Framer Motion before and wanted to try
                            something different. Overall, I ended up preferring
                            GSAP as it was easier to simply drop some animation
                            code into pre-existing components without major
                            changes. Additionally, the timeline API makes it
                            very simple to create staggered and delayed
                            animations.
                        </Paragraph>
                    </div>
                </div>

                <div className="mb-32 tb:max-w-[45rem] dt:max-w-[50rem]">
                    <CodeHightlight title="Disk Drop Animations">
                        <div className="tb:grid tb:grid-cols-2 tb:gap-10">
                            <div className="tb:order-1">
                                <CroppedImage
                                    image="bg-[url('../public/connect-four-disc-drop.gif')]"
                                    imageSize="bg-[length:100%]"
                                    imagePosition="bg-[0%_38%]"
                                    aspect="aspect-[16/13]"
                                />
                            </div>
                            <div className="tb:order-2">
                                <Paragraph alignment="text-left">
                                    Animating the disks dropping into the board,
                                    as players made their moves, provided an
                                    extra challenge, as the end point of the
                                    animation (where the disk ended up on the
                                    board) was dynamic and dependent on the
                                    number of discs that were already in that
                                    column.
                                </Paragraph>
                            </div>
                            <div className="tb:order-4">
                                <Image
                                    className="my-10 tb:my-0"
                                    src={formulaDiagram}
                                    alt="Diagram showing how the end point of the disc drop animation was derived"
                                />
                            </div>
                            <div className="tb:order-3">
                                <Paragraph alignment="text-left">
                                    Drawing out the problem made it much easier
                                    to derive the formula needed to calculate
                                    the end point.
                                </Paragraph>
                            </div>
                        </div>
                    </CodeHightlight>
                </div>

                <BackToTopButton />

                <TextureOverlay />
            </>
        </MainContainer>
    )
}
