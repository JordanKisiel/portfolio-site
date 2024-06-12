type Props = {
    title: string
    children: JSX.Element
}

export default function CodeHightlight({ title, children }: Props) {
    return (
        <div className="flex flex-col gap-3 p-5 bg-blue-100 border-2 border-blue-400 border-dashed rounded-[5px] txl:p-10">
            <div className="mb-5 tl:mb-10">
                <p className="text-blue-400 font-amiko uppercase text-sm text-center mb-[0.625] txl:text-base">
                    Code Highlight
                </p>
                <h3 className="text-neutral-900 font-amiko text-[1.25rem] uppercase text-center tl:text-[1.5rem] txl:text-[1.75rem]">
                    {title}
                </h3>
            </div>
            {children}
        </div>
    )
}
