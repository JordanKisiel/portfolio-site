import type { Metadata } from "next"
import { Outfit, Abhaya_Libre, Amiko } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
    weight: "700",
    subsets: ["latin"],
    variable: "--font-outfit",
})
const abhaya = Abhaya_Libre({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-abhaya",
})
const amiko = Amiko({
    weight: "600",
    subsets: ["latin"],
    variable: "--font-amiko",
})

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
