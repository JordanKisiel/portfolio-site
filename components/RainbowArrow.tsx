import ArrowClipPath from "@/components/ArrowClipPath"

export default function Arrow() {
    return (
        <div className="relative flex flex-row justify-center items-center">
            <div className="arrowContainer w-[2.3rem] h-[3.75rem]">
                <ArrowClipPath />
            </div>
        </div>
    )
}
