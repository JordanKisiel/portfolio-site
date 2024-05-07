import { Outfit, Abhaya_Libre, Amiko } from "next/font/google"

export const outfit = Outfit({
    weight: "700",
    subsets: ["latin"],
    variable: "--font-outfit",
})
export const abhaya = Abhaya_Libre({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-abhaya",
})
export const amiko = Amiko({
    weight: "600",
    subsets: ["latin"],
    variable: "--font-amiko",
})
