type Props = {
    alignment: string
    children: string
}

export default function Paragraph({ alignment, children }: Props) {
    return (
        <p
            className={`font-abhaya text-neutral-900 text-xl font-semibold ${alignment}`}
        >
            {children}
        </p>
    )
}
