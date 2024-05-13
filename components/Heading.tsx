type Props = {
    children: string
    alignment: string
    highlightIndex: number
    highlightColor: string
}

export default function Heading({
    children,
    alignment,
    highlightIndex,
    highlightColor,
}: Props) {
    const characters = children.split("")

    const charElements = characters.map((character, index) => {
        return (
            <span
                key={`${index}`}
                className={`${highlightIndex === index && highlightColor}`}
            >
                {character}
            </span>
        )
    })

    return (
        <h2
            className={`font-outfit text-neutral-900 text-4xl mb-5 ${alignment}`}
        >
            {charElements}
        </h2>
    )
}
