type Props = {
    label: string
    textColor: string
    bgColor: string
    children: JSX.Element
}

export default function LabeledContainer({
    label,
    textColor,
    bgColor,
    children,
}: Props) {
    return (
        <div
            className={`flex flex-col items-center rounded-[5px] px-5 py-5 mb-10 ${bgColor}`}
        >
            <h2
                className={`text-amiko uppercase text-center mb-5 tracking-wider ${textColor}`}
            >
                {label}
            </h2>
            {children}
        </div>
    )
}
