import type { Metadata } from "next"
import { outfit, abhaya, amiko, orelega } from "@/assets/fonts"
import "./globals.css"

export const metadata: Metadata = {
    title: "Jordan Kisiel - Web Developer Portfolio",
    description: "The web developer portfolio of Jordan Kisiel, of course",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            className="scroll-smooth"
            lang="en"
        >
            <body
                className={`${outfit.variable} ${abhaya.variable} ${amiko.variable} ${orelega.variable} 
                          bg-orange-100 flex flex-col items-center`}
            >
                {children}
            </body>
        </html>
    )
}
