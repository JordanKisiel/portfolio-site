import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
            <body className={`${inter.className} bg-orange-100`}>
                {children}
            </body>
        </html>
    )
}
