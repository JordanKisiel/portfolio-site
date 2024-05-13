type Props = {
    children: string
}

export default function FeaturesListItem({ children }: Props) {
    return (
        <li className="relative bg-[url('../public/feature-list-bullet.svg')] bg-no-repeat bg-[left_0rem] pl-8 leading-tight">
            <span>{children}</span>
        </li>
    )
}
