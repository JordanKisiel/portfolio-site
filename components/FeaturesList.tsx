type Props = {
    children: JSX.Element
}

export default function FeaturesList({ children }: Props) {
    return (
        <ul className="flex flex-col gap-3 font-abhaya font-semibold text-neutral-900">
            {children}
        </ul>
    )
}
