import BackHomeLink from "@/components/BackHomeLink"
import CroppedImage from "@/components/CroppedImage"

export default function Page() {
    return (
        <main className="w-full px-5 pt-5">
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
                {/* TODO: replace with Connect Four image */}
                <CroppedImage
                    image="bg-[url('../public/kanban-mobile-thumb.png')]"
                    imageSize="bg-[length:80rem]"
                    imagePosition="bg-[-8rem_-3rem]"
                    height="h-48"
                />
            </div>
        </main>
    )
}
