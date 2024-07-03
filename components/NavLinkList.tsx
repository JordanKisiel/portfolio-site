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
                <a href="https://drive.google.com/file/d/1UxegxtubC-oYkjqaAuzt1DkWUixF_5Px/view?usp=sharing">
                    Resume
                </a>
            </li>
        </>
    )
}
