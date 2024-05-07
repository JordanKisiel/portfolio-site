import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Photo from "@/components/Photo"
import Link from "next/link"
import emailIcon from "@/public/email-icon.svg"
import linkedinIcon from "@/public/linkedin-icon.svg"
import githubIcon from "@/public/email-icon.svg"
import resumeIcon from "@/public/resume-icon.svg"

export default function Home() {
    return (
        <>
            <Nav />
            {/* Intro */}
            <div className="flex flex-col items-center pt-20 gap-5">
                <IntroText width={220} />
                <Photo />
                <p className="flex flex-col items-center font-abhaya text-center">
                    <span className="block text-2xl font-bold leading-9">
                        a
                    </span>
                    <span className="block text-2xl font-bold w-4/5 leading-6">
                        Fullstack Web Developer
                    </span>
                    <span className="block text-[1rem] font-bold leading-8">
                        (among other things)
                    </span>
                </p>
            </div>

            {/* Contact */}
            <div className="bg-purple-100">
                <div className="bg-blue-400 mx-[1.1rem] rounded-[5px] -rotate-[3deg]">
                    <div className="bg-red-400 rounded-[5px] rotate-[7deg]">
                        <ul className="flex flex-col font-abhaya font-semibold bg-blue-100 p-5 rounded-[5px] gap-5 -rotate-[4deg]">
                            {/* TODO: also consider making this link copy the email address for pasting? */}
                            <li className="bg-[url('../public/email-icon.svg')] bg-no-repeat bg-left pl-8">
                                <Link href="mailto:jordan.kisiel@gmail.com">
                                    jordan.kisiel@gmail.com
                                </Link>
                            </li>
                            <li className="bg-[url('../public/linkedin-icon.svg')] bg-no-repeat bg-left pl-8">
                                <Link href="https://linkedin.com/in/jordan-kisiel-b60129114">
                                    Linkedin
                                </Link>
                            </li>
                            <li className="bg-[url('../public/github-icon.svg')] bg-no-repeat bg-left pl-8">
                                <Link href="https://github.com/JordanKisiel">
                                    Github
                                </Link>
                            </li>
                            <li className="bg-[url('../public/resume-icon.svg')] bg-no-repeat bg-left pl-8">
                                <Link href="https://github.com/JordanKisiel">
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* texture overaly */}
            {/* pointer-events-none allows clicks through the overlay */}
            <div className="absolute inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-5 pointer-events-none"></div>
        </>
    )
}
