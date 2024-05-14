type Props = {
    children: string
    alignment: string
    highlightIndices: number[]
    highlightColor: string
}

export default function Heading({
    children,
    alignment,
    highlightIndices,
    highlightColor,
}: Props) {
    const characters = children.split("")

    const charElements = characters.map((character, index) => {
        return (
            <span
                key={`${index}`}
                className={`${
                    highlightIndices.includes(index) && highlightColor
                }`}
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
