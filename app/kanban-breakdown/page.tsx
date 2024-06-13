import Image from "next/image"
import MainContainer from "@/components/MainContainer"
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
import BreakdownTitle from "@/components/BreakdownTitle"

export default function Page() {
    return (
        <MainContainer>
            <>
                <div className="w-full">
                    <BackHomeLink />
                </div>
                <div className="flex flex-col gap-5 mb-10 w-full tb:mb-20 txl:mb-32">
                    <BreakdownTitle
                        mainTitle="Kanban"
                        subTitle="Project Management Tool"
                    />
                    <CroppedImage
                        image="bg-[url('../public/kanban-mobile-thumb.png')] 
                               tb:bg-[url('../public/dragndrop.gif')]"
                        imageSize="bg-[length:300%] tb:bg-[length:150%] tl:bg-[length:100%]"
                        imagePosition="bg-[14%_10%] tb:bg-[0%_25%]"
                        aspect="aspect-[16/9]"
                    />
                </div>
                <div className="tb:grid tb:grid-cols-2 tb:gap-12 tb:mb-16 txl:gap-16 txl:mb-32">
                    <div className="mb-5">
                        <Heading
                            alignment="text-center tb:text-left"
                            highlightIndices={[10]}
                            highlightColor="text-red-400"
                        >
                            What is it?
                        </Heading>
                        <Paragraph alignment="text-left">
                            This project is my web app implementation of a
                            Kanban board. It allows the user to organize their
                            tasks for different projects in 2 dimensions:
                            vertically by priority and horizontally by status.
                        </Paragraph>
                    </div>
                    <div className="hidden tb:block">
                        <CroppedImage
                            image="bg-[url('../public/kanban-mobile-thumb.png')]"
                            imageSize="bg-[length:250%]"
                            imagePosition="bg-[17%_12%]"
                            aspect="aspect-[16/9]"
                        />
                    </div>
                </div>
                <div className="w-full mb-20 tb:grid tb:grid-cols-2 tb:gap-12 txl:gap-16 txl:mb-32">
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
                                    Drag & Drop of tasks within and between
                                    columns
                                </FeaturesListItem>
                                <FeaturesListItem>
                                    Responsive design for mobile, tablet, and
                                    desktop
                                </FeaturesListItem>
                                <FeaturesListItem>
                                    Light/Dark mode
                                </FeaturesListItem>
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
                        <div className="grid grid-cols-3 w-full gap-5 tb:grid-cols-2 tl:grid-cols-3 txl:gap-8 dt:gap-12">
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

                <div
                    className="flex flex-col gap-3 mb-20 tb:grid tb:grid-cols-2 tb:gap-x-12 tb:gap-y-0 txl:gap-x-16
                                txl:mb-32"
                >
                    <div className="order-1 tb:col-start-2 tb:col-end-3 tb:row-start-1 tb:row-end-2">
                        <Heading
                            alignment="text-center tb:text-left"
                            highlightIndices={[5]}
                            highlightColor="text-purple-400"
                        >
                            Data Modeling
                        </Heading>
                    </div>
                    <div className="order-2 tb:mb-3 tb:col-start-2 tb:col-end-3 tb:row-start-2 tb:row-end-4">
                        <Paragraph alignment="text-left">
                            The data in this project was largely relational
                            one-to-many relationships: one user has many boards,
                            one board has many columns, etc.
                        </Paragraph>
                    </div>
                    <div className="order-4 tb:col-start-2 tb:col-end-3 tb:row-start-4 tb:row-end-6">
                        <Paragraph alignment="text-left">
                            For this reason, I chose to use a PostgreSQL
                            database as it seemed to be a solid, well-known
                            option as a relational database.
                        </Paragraph>
                    </div>
                    <div className="order-3 tb:col-start-1 tb:col-end-2 tb:row-start-1 tb:row-end-8 dt:place-self-center">
                        <Image
                            className="my-10 tb:my-0"
                            src={relationDiagram}
                            alt="Relation diagram for the Kanban app"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 mb-20 tb:max-w-[26rem] txl:max-w-[36rem] txl:mb-32">
                    <Heading
                        alignment="text-center"
                        highlightIndices={[5]}
                        highlightColor="text-red-400"
                    >
                        Data Retrieval
                    </Heading>
                    <div>
                        <Image
                            className="mb-5"
                            src={dataRetrievalDiagram}
                            alt="Data retrieval diagram for Kanban app"
                        />
                    </div>
                    <div className="txl:w-5/6">
                        <Paragraph alignment="text-left tb:text-center">
                            I used data utility functions that wrapped axios
                            requests to an API layer. In the API route handlers,
                            I used Prisma to retrieve the data from the db. The
                            abstraction of the data util functions creates a
                            clear separation between my app and the data that it
                            uses, mitigating the need for changes in my app if
                            the API or database changes.
                        </Paragraph>
                    </div>
                </div>

                <div className="mb-20 txl:mb-32">
                    <CodeHightlight title="Dynamic Inputs">
                        <div className="flex flex-col gap-6 tb:grid tb:grid-cols-2 tb:gap-y-12">
                            <div>
                                <CroppedImage
                                    image="bg-[url('../public/edit-board-modal.png')]"
                                    imageSize="bg-[length:125%]"
                                    imagePosition="bg-[45%_60%]"
                                    aspect="aspect-[16/12]"
                                />
                            </div>
                            <div>
                                <Paragraph alignment="text-left">
                                    The dynamic nature of the input lists used
                                    for columns and subtasks provided an extra
                                    challenge as multiple CRUD operations had to
                                    be performed in a single request: add, edit,
                                    and delete.
                                </Paragraph>
                            </div>
                            <div>
                                <CroppedImage
                                    image="bg-[url('../public/dynamic-input-data-shape.png')]"
                                    imageSize="bg-[length:100%]"
                                    imagePosition="bg-[0%_0%]"
                                    aspect="aspect-[16/8.5]"
                                />
                            </div>

                            <div>
                                <Paragraph alignment="text-left">
                                    To accomplish this, I used the data shape
                                    shown. An object with arrays for creation,
                                    updating, and deletion. Depending on the
                                    action taken by the user, multiple arrays
                                    could be updated, each with their own logic.
                                </Paragraph>
                            </div>

                            <div>
                                <CroppedImage
                                    image="bg-[url('../public/edit-column-logic.png')]"
                                    imageSize="bg-[length:150%]"
                                    imagePosition="bg-[30%_55%]"
                                    aspect="aspect-[16/18.5]"
                                />
                            </div>

                            <div>
                                <Paragraph alignment="text-left">
                                    For instance, if the user edits a column,
                                    the “create” array is put through a map
                                    whose behavior is governed by the length of
                                    the “update” array because the “create”
                                    array always appears at the bottom of the
                                    dynamic list. The “update” array is mapped
                                    in the typical way for a change handler.
                                    Finally, the “delete” array is simply spread
                                    out with no mapping since it is never
                                    rendered (but it is sent to database for the
                                    deletion of the appropriate items!)
                                </Paragraph>
                            </div>
                        </div>
                    </CodeHightlight>
                </div>

                <div
                    className="flex flex-col items-center gap-5 mb-20 txl:relative txl:grid txl:grid-cols-4 txl:grid-rows-6
                                txl:gap-y-0 txl:mb-32"
                >
                    <div className="txl:row-start-1 txl:row-end-2 txl:col-start-1 txl:col-end-2">
                        <Heading
                            alignment="text-center txl:text-left"
                            highlightIndices={[3]}
                            highlightColor="text-blue-400"
                        >
                            Auth
                        </Heading>
                    </div>

                    <div
                        className="w-full tb:w-3/5 txl:row-start-1 txl:row-end-6 txl:col-start-3 txl:col-end-5 txl:w-full
                                    txl:self-start"
                    >
                        <CroppedImage
                            image="bg-[url('../public/login.png')]"
                            imageSize="bg-[length:125%]"
                            imagePosition="bg-[50%_30%]"
                            aspect="aspect-[16/9]"
                        />
                    </div>

                    <div className="tb:w-4/5 txl:row-start-2 txl:row-end-7 txl:col-start-1 txl:col-end-3 txl:w-[90%] txl:self-start">
                        <Paragraph alignment="text-center txl:text-left">
                            I chose NextAuth for it&apos;s easy integration into
                            Next.js projects and Github as the OAuth provider.
                            When a new user signs in, a new UUID is created in
                            User table of the database and is associated with
                            the user&apos;s email. On subsequent logins, the
                            email is found in the database and the user is
                            redirected to their boards. The UUID for the user
                            can seen in the URL.
                        </Paragraph>
                    </div>

                    <div className="tb:w-2/5 txl:absolute txl:bottom-[1rem] txl:-right-[1rem] txl:w-[15rem]">
                        <CroppedImage
                            image="bg-[url('../public/UUID.png')]"
                            imageSize="bg-[length:210%]"
                            imagePosition="bg-[65%_100%]"
                            aspect="aspect-[16/4]"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-5 mb-32">
                    <div>
                        <Heading
                            alignment="text-center"
                            highlightIndices={[5]}
                            highlightColor="text-pink-400"
                        >
                            Drag & Drop
                        </Heading>
                    </div>
                    <div className="w-full tb:w-[30rem]">
                        <CroppedImage
                            image="bg-[url('../public/dragndrop.gif')]"
                            imageSize="bg-[length:250%] tb:bg-[length:200%]"
                            imagePosition="bg-[35%_25%] tb:bg-[27%_25%]"
                            aspect="aspect-[16/14] tb:aspect-[16/9]"
                        />
                    </div>
                    <div className="tb:w-5/6 txl:max-w-[54rem]">
                        <Paragraph alignment="text-left tb:text-center">
                            After some research, I chose dndkit to handle
                            dragging & dropping of tasks. This was mostly due
                            preferring the API over those of other React drag
                            and drop options and the customization available
                            with dndkit. To provide a better user experience and
                            maintain data integrity, task grouping and ordering
                            data is updated in the local cache (using TanStack
                            Query) during dragging and is only synced to the
                            database when the user finishes dragging. In the
                            event of an error, tasks are rolled back to their
                            previous positions. The user is also prevented from
                            dragging again until task data is retrieved from the
                            server. This isn&apos;t ideal, but an ideal solution
                            seemed like it would&apos;ve added a lot of
                            complexity and dev time so I decided to go with the
                            simpler solution.
                        </Paragraph>
                    </div>
                </div>

                <BackToTopButton />

                <TextureOverlay />
            </>
        </MainContainer>
    )
}
