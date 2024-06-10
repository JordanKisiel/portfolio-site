type Props = {
    onClick?: () => void
}

export default function NavLinkList({ onClick }: Props) {
    return (
        <>
            <li>
                <a
                    onClick={onClick ? () => onClick() : () => {}}
                    href="#contact"
                >
                    Contact
                </a>
            </li>
            <li>
                <a
                    onClick={onClick ? () => onClick() : () => {}}
                    href="#portfolio"
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#">Resume</a>
            </li>
        </>
    )
}
