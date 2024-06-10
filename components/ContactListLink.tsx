import Link from "next/link"

type Props = {
    bgIcon: string
    linkUrl: string
    text: string
}

export default function ContactListLink({ bgIcon, linkUrl, text }: Props) {
    return (
        <li className="block w-full tl:w-auto">
            <Link
                className={`${bgIcon} block bg-no-repeat bg-left pl-8 w-4/5 pt-1`}
                href={linkUrl}
            >
                {text}
            </Link>
        </li>
    )
}
