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
                />
            </div>
            <div className="mb-5">
                <Heading
                    alignment="text-center"
                    highlightIndex={10}
                    highlightColor="text-pink-400"
                >
                    What is it?
                </Heading>
                <p className="font-abhaya text-neutral-900 text-xl font-semibold">
                    This project is my web app implementation of a Kanban board.
                    It allows the user to organize their tasks for different
                    projects in 2 dimensions: vertically by priority and
                    horizontally by status.
                </p>
            </div>
            <LabeledContainer
                label="Features"
                textColor="text-blue-100"
                bgColor="bg-blue-400"
            >
                <FeaturesList>
                    <>
                        <FeaturesListItem>
                            CRUD operations for all data (boards, tasks, etc.)
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
                            Responsive design for mobile, tablet, and desktop
                        </FeaturesListItem>
                        <FeaturesListItem>Light/Dark mode</FeaturesListItem>
                        <FeaturesListItem>Collapsible sidebar</FeaturesListItem>
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

            <TextureOverlay />
        </main>
    )
}
