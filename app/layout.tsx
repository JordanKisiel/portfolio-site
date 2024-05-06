import type { Metadata } from "next"
import { outfit, abhaya, amiko } from "@/assets/fonts"
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
        <html lang="en">
            <body
                className={`${outfit.variable} ${abhaya.variable} ${amiko.variable} bg-orange-100`}
            >
                {children}
            </body>
        </html>
    )
}
