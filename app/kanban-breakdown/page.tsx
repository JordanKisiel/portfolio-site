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
import CodeHightlight from "@/components/CodeHighlight"
import BackToTopButton from "@/components/BackToTopButton"

export default function Page() {
    return (
        <main className="w-full px-5 pt-5 overflow-x-hidden">
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
                    imageSize="bg-[length:300%]"
                    imagePosition="bg-[0%_0%]"
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
                            logo={tanstackQueryLogo}
                            logoSize={60}
                            logoAlt="Tanstack Query logo"
                            label="Data Management"
                        />
                        <TechUsed
                            logo={postgresqlLogo}
                            logoSize={70}
                            logoAlt="PostgreSQL logo"
                            label="Database"
                        />
                        <TechUsed
                            logo={prismaLogo}
                            logoSize={60}
                            logoAlt="Prisma logo"
                            label="ORM"
                        />
                        <TechUsed
                            logo={nextAuthLogo}
                            logoSize={70}
                            logoAlt="NextAuth.js logo"
                            label="Auth"
                        />
                        <TechUsed
                            logo={tailwindLogo}
                            logoSize={70}
                            logoAlt="Tailwind logo"
                            label="Styling"
                        />
                        <TechUsed
                            logo={dndkitLogo}
                            logoSize={70}
                            logoAlt="dndkit logo"
                            label="Drag & Drop"
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
                    imageSize="bg-[length:110%]"
                    imagePosition="bg-[0%_75%]"
                    imageOpacity="opacity-60"
                    height="h-12"
                    colorOverlay="bg-purple-400"
                />
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-sidebar.png')]"
                    imageSize="bg-[length:100%]"
                    imagePosition="bg-[0%_0%]"
                    height="h-[20.5rem]"
                    colorOverlay="bg-pink-400"
                />
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-thumb.png')]"
                    imageSize="bg-[length:300%]"
                    imagePosition="bg-[15%_25%]"
                    height="h-[24rem]"
                    colorOverlay="bg-red-400"
                />
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-modals.png')]"
                    imageSize="bg-[length:140%]"
                    imagePosition="bg-[0%_0%]"
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

            <div className="mb-20">
                <CodeHightlight title="Dynamic Inputs">
                    <>
                        <CroppedImage
                            image="bg-[url('../public/edit-board-modal.png')]"
                            imageSize="bg-[length:125%]"
                            imagePosition="bg-[45%_60%]"
                            height="h-[14rem]"
                        />
                        <Paragraph alignment="text-left">
                            The dynamic nature of the input lists used for
                            columns and subtasks provided an extra challenge as
                            multiple CRUD operations had to be performed in a
                            single request: add, edit, and delete.
                        </Paragraph>
                        <CroppedImage
                            image="bg-[url('../public/dynamic-input-data-shape.png')]"
                            imageSize="bg-[length:100%]"
                            imagePosition="bg-[0%_0%]"
                            height="h-[10rem]"
                        />
                        <Paragraph alignment="text-left">
                            To accomplish this, I used the data shape above. An
                            object with arrays for creation, updating, and
                            deletion. Depending on the action taken by the user,
                            multiple arrays could be updated, each with their
                            own logic.
                        </Paragraph>
                        <CroppedImage
                            image="bg-[url('../public/edit-column-logic.png')]"
                            imageSize="bg-[length:150%]"
                            imagePosition="bg-[30%_55%]"
                            height="h-[22rem]"
                        />
                        <Paragraph alignment="text-left">
                            For instance, if the user edits a column, the
                            “create” array is put through a map whose behavior
                            is governed by the length of the “update” array
                            because the “create” array always appears at the
                            bottom of the dynamic list. The “update” array is
                            mapped in the typical way for a change handler.
                            Finally, the “delete” array is simply spread out
                            with no mapping since it is never rendered (but it
                            is sent to database for the deletion of the
                            appropriate items!)
                        </Paragraph>
                    </>
                </CodeHightlight>
            </div>

            <div className="flex flex-col gap-5 mb-20">
                <Heading
                    alignment="text-center"
                    highlightIndices={[3]}
                    highlightColor="text-blue-400"
                >
                    Auth
                </Heading>
                <CroppedImage
                    image="bg-[url('../public/login.png')]"
                    imageSize="bg-[length:125%]"
                    imagePosition="bg-[50%_30%]"
                    height="h-48"
                />
                <Paragraph alignment="text-left">
                    I chose NextAuth for it&apos;s easy integration into Next.js
                    projects and Github as the OAuth provider. When a new user
                    signs in, a new UUID is created in User table of the
                    database and is associated with the user&apos;s email. On
                    subsequent logins, the email is found in the database and
                    the user is redirected to their boards. The UUID for the
                    user can seen in the URL.
                </Paragraph>
                <CroppedImage
                    image="bg-[url('../public/UUID.png')]"
                    imageSize="bg-[length:200%]"
                    imagePosition="bg-[65%_100%]"
                    height="h-24"
                />
            </div>

            <div className="flex flex-col gap-5 mb-32">
                <Heading
                    alignment="text-center"
                    highlightIndices={[5]}
                    highlightColor="text-pink-400"
                >
                    Drag & Drop
                </Heading>
                <CroppedImage
                    image="bg-[url('../public/dragndrop.gif')]"
                    imageSize="bg-[length:250%]"
                    imagePosition="bg-[25%_25%]"
                    height="h-48"
                />
                <Paragraph alignment="text-left">
                    After some research, I chose dndkit to handle dragging &
                    dropping of tasks. This was mostly due preferring the API
                    over those of other React drag and drop options and the
                    customization available with dndkit. To provide a better
                    user experience and maintain data integrity, task grouping
                    and ordering data is updated in the local cache (using
                    TanStack Query) during dragging and is only synced to the
                    database when the user finishes dragging. In the event of an
                    error, tasks are rolled back to their previous positions.
                    The user is also prevented from dragging again until task
                    data is retrieved from the server. This isn&apos;t ideal,
                    but an ideal solution seemed like it would&apos;ve added a
                    lot of complexity and dev time so I decided to go with the
                    simpler solution.
                </Paragraph>
            </div>

            <BackToTopButton />

            <TextureOverlay />
        </main>
    )
}
