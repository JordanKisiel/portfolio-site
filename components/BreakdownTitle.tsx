type Props = {
    mainTitle: string
    subTitle: string
}

export default function BreakdownTitle({ mainTitle, subTitle }: Props) {
    return (
        <h1 className="font-outfit text-center mt-10 dt:mt-20">
            <span
                className="block text-[4rem] leading-[3.5rem] tb:text-[5rem] tb:leading-[4rem]
                             dt:text-[7rem] dt:leading-[6rem]"
            >
                {mainTitle}
            </span>
            <span className="text-xl tb:text-2xl dt:text-[2.09rem]">
                {subTitle}
            </span>
        </h1>
    )
}
