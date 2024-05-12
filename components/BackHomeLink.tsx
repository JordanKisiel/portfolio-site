import Link from "next/link"
import BackHomeIcon from "@/components/BackHomeIcon"

export default function BackHomeLink() {
    return (
        <Link href="/">
            <BackHomeIcon
                foregroundColor="#F1D7D7"
                foregroundOpacity={0.5}
                backgroundColor="#EE7C7D"
            />
        </Link>
    )
}
