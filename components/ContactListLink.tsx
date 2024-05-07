import Link from "next/link"

type Props = {
    bgIcon: string
    linkUrl: string
    text: string
}

export default function ContactListLink({ bgIcon, linkUrl, text }: Props) {
    return (
        <li className="block w-full">
            <Link
                className={`${bgIcon} bg-no-repeat bg-left pl-8 block w-4/5`}
                href={linkUrl}
            >
                {text}
            </Link>
        </li>
    )
}
