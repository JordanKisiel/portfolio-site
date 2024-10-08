type Props = {
    title: string
    thumbnail: JSX.Element
    linesOfCode: number
    numOfCommits: number
    portfolioLinks: JSX.Element
}

export default function Project({
    title,
    thumbnail,
    linesOfCode,
    numOfCommits,
    portfolioLinks,
}: Props) {
    return (
        <div className="flex flex-col mb-20 tb:w-5/6 tl:grid tl:grid-cols-3 tl:gap-3 dt:max-w-full dt:mb-28">
            <div className="mb-[0.625rem] tl:col-span-2">
                <h3
                    className="font-amiko text-neutral-900 text-2xl leading-6 text-center text-balance bg-neutral-100 
                                   rounded-[5px] shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] border-2 border-[#EFEFEF] 
                                   tracking-tighter pt-3 pb-2 px-4 mb-[0.625rem] tb:text-3xl dt:text-5xl"
                >
                    {title}
                </h3>
                {thumbnail}
            </div>
            <div>
                <div className="flex flex-row justify-between font-abhaya gap-[0.625rem] mb-[0.625rem]">
                    <div
                        className="flex flex-col justify-center items-center rounded-[5px] bg-neutral-100 w-1/2 py-[0.625rem]
                                        shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] border-2 border-[#EFEFEF]"
                    >
                        <p className="text-4xl">{linesOfCode}</p>
                        <p className="text-xl leading-[0.625rem]">LOC</p>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center rounded-[5px] bg-neutral-100 w-1/2 py-[0.625rem]
                                        shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] border-2 border-[#EFEFEF]"
                    >
                        <p className="text-4xl">{`${numOfCommits}+`}</p>
                        <p className="text-xl leading-[0.625rem]">Commits</p>
                    </div>
                </div>
                {/* Links */}
                <div className="flex flex-col gap-[0.625rem] tb:grid tb:grid-cols-2 tl:grid-cols-1">
                    {portfolioLinks}
                </div>
            </div>
        </div>
    )
}
