type Props = {
    title: string
    children: JSX.Element
}

export default function CodeHightlight({ title, children }: Props) {
    return (
        <div className="flex flex-col gap-3 p-5 bg-blue-100 border-2 border-blue-400 border-dashed rounded-[5px]">
            <div className="mb-5">
                <p className="text-blue-400 font-amiko uppercase text-sm text-center mb-[0.625]">
                    Code Highlight
                </p>
                <h3 className="text-neutral-900 font-amiko text-[1.25rem] uppercase text-center">
                    {title}
                </h3>
            </div>
            {children}
        </div>
    )
}
