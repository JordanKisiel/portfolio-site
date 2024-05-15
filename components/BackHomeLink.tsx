import Link from "next/link"
import BackHomeIcon from "@/components/BackHomeIcon"

export default function BackHomeLink() {
    return (
        <Link href="/">
            <BackHomeIcon
                foregroundColor="#161616"
                foregroundOpacity={0.25}
                backgroundColor="#E2ECEF"
            />
        </Link>
    )
}
