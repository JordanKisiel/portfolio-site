import Image from "next/image"
import BackHomeLink from "@/components/BackHomeLink"
import TextureOverlay from "@/components/TextureOverlay"
import CroppedImage from "@/components/CroppedImage"
import nextLogo from "@/public/next-logo.svg"
import TechUsed from "@/components/TechUsed"
import typescriptLogo from "@/public/typescript-logo.svg"
import tanstackQueryLogo from "@/public/tanstack-query-logo.svg"
import postgresqlLogo from "@/public/postgre-sql-logo.svg"
import prismaLogo from "@/public/prisma-logo.svg"
import nextAuthLogo from "@/public/nextauth-logo.svg"
import tailwindLogo from "@/public/tailwind-logo.svg"
import dndkitLogo from "@/public/dndkit-logo.svg"
import LabeledContainer from "@/components/LabeledContainer"
import Heading from "@/components/Heading"
import FeaturesList from "@/components/FeaturesList"
import FeaturesListItem from "@/components/FeaturesListItem"
import Paragraph from "@/components/Paragraph"
import relationDiagram from "@/public/relation-diagram.svg"
import dataRetrievalDiagram from "@/public/data-retrieval-diagram.svg"

export default function Page() {
    return (
        <main className="w-full px-5 pt-5">
            <BackHomeLink />
            <div className="flex flex-col gap-5 mb-10">
                <h1 className="font-outfit text-center mt-10">
                    <span className="block text-[4rem] leading-[3.5rem]">
                        Kanban
                    </span>
                    <span className="text-xl">Project Management Tool</span>
                </h1>
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-thumb.png')]"
                    imageSize="bg-[length:80rem]"
                    imagePosition="bg-[-8rem_-3rem]"
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
                    This project is my web app implementation of a Kanban board.
                    It allows the user to organize their tasks for different
                    projects in 2 dimensions: vertically by priority and
                    horizontally by status.
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
                                CRUD operations for all data (boards, tasks,
                                etc.)
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Error Handling on form submission with retry
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Optimistic Updates w/ rollback on error
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Loading states and skeletons
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Account creation and access with OAuth
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Drag & Drop of tasks within and between columns
                            </FeaturesListItem>
                            <FeaturesListItem>
                                Responsive design for mobile, tablet, and
                                desktop
                            </FeaturesListItem>
                            <FeaturesListItem>Light/Dark mode</FeaturesListItem>
                            <FeaturesListItem>
                                Collapsible sidebar
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
                        {/* TODO: Fill in tech info */}
                        <TechUsed
                            logo={nextLogo}
                            logoSize={60}
                            logoAlt="Next.js logo"
                            label="Framework"
                            paddingY="py-5"
                        />
                        <TechUsed
                            logo={typescriptLogo}
                            logoSize={30}
                            logoAlt="Typescript logo"
                            label="Language"
                            paddingY="py-4"
                        />
                        <TechUsed
                            logo={tanstackQueryLogo}
                            logoSize={60}
                            logoAlt="Tanstack Query logo"
                            label="Data Management"
                            paddingY="py-6"
                        />
                        <TechUsed
                            logo={postgresqlLogo}
                            logoSize={70}
                            logoAlt="PostgreSQL logo"
                            label="Database"
                            paddingY="py-6"
                        />
                        <TechUsed
                            logo={prismaLogo}
                            logoSize={60}
                            logoAlt="Prisma logo"
                            label="ORM"
                            paddingY="py-6"
                        />
                        <TechUsed
                            logo={nextAuthLogo}
                            logoSize={70}
                            logoAlt="NextAuth.js logo"
                            label="Auth"
                            paddingY="py-6"
                        />
                        <TechUsed
                            logo={tailwindLogo}
                            logoSize={70}
                            logoAlt="Tailwind logo"
                            label="Styling"
                            paddingY="py-6"
                        />
                        <TechUsed
                            logo={dndkitLogo}
                            logoSize={70}
                            logoAlt="dndkit logo"
                            label="Drag & Drop"
                            paddingY="py-6"
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
                    image="bg-[url('../public/kanban-mobile-header.png')]"
                    imageSize="bg-[length:25rem]"
                    imagePosition="bg-[-2.3rem_-0.5rem]"
                    imageOpacity="opacity-60"
                    height="h-12"
                    colorOverlay="bg-purple-400"
                />
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-sidebar.png')]"
                    imageSize="bg-[length:21rem]"
                    imagePosition="bg-[0rem_0rem]"
                    height="h-[20.5rem]"
                    colorOverlay="bg-pink-400"
                />
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-thumb.png')]"
                    imageSize="bg-[length:80rem]"
                    imagePosition="bg-[-8rem_-3rem]"
                    height="h-[24rem]"
                    colorOverlay="bg-red-400"
                />
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-modals.png')]"
                    imageSize="bg-[length:30rem]"
                    imagePosition="bg-[-0.5rem_0rem]"
                    height="h-[20rem]"
                    colorOverlay="bg-blue-400"
                />
            </div>

            <div className="flex flex-col gap-3 mb-20">
                <Heading
                    alignment="text-center"
                    highlightIndices={[5]}
                    highlightColor="text-purple-400"
                >
                    Data Modeling
                </Heading>
                <Paragraph alignment="text-left">
                    The data in this project was largely relational one-to-many
                    relationships: one user has many boards, one board has many
                    columns, etc.
                </Paragraph>
                <Image
                    className="my-10"
                    src={relationDiagram}
                    alt="Relation diagram for the Kanban app"
                />
                <Paragraph alignment="text-left">
                    For this reason, I chose to use a PostgreSQL database as it
                    seemed to be a solid, well-known option as a relational
                    database.
                </Paragraph>
            </div>

            <div className="flex flex-col gap-3 mb-20">
                <Heading
                    alignment="text-center"
                    highlightIndices={[5]}
                    highlightColor="text-red-400"
                >
                    Data Retrieval
                </Heading>
                <Image
                    className="my-5"
                    src={dataRetrievalDiagram}
                    alt="Data retrieval diagram for Kanban app"
                />
                <Paragraph alignment="text-left">
                    I used data utility functions that wrapped axios requests to
                    an API layer. In the API route handlers, I used Prisma to
                    retrieve the data from the db. The abstraction of the data
                    util functions creates a clear separation between my app and
                    the data that it uses, mitigating the need for changes in my
                    app if the API or database changes.
                </Paragraph>
            </div>

            <TextureOverlay />
        </main>
    )
}
