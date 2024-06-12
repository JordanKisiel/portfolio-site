type Props = {
    alignment: string
    children: string
}

export default function Paragraph({ alignment, children }: Props) {
    return (
        <p
            className={`font-abhaya text-neutral-900 text-xl font-semibold text-pretty txl:text-2xl txl:font-normal ${alignment}`}
        >
            {children}
        </p>
    )
}
