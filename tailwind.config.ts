import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./data/*.json",
    ],
    theme: {
        colors: {
            red: {
                100: "#F1D7D7",
                400: "#EE7C7D",
            },
            orange: {
                100: "#F0E1D7",
                400: "#F5AC7F",
            },
            blue: {
                100: "#E2ECEF",
                400: "#61C4E1",
            },
            pink: {
                100: "#F1E0E8",
                400: "#D973A3",
            },
            purple: {
                100: "#E4DEED",
                400: "#8054C4",
            },
            neutral: {
                100: "#ECE5E1",
                200: "#E2ECEF",
                300: "E0E0E0",
                900: "#161616",
            },
        },
        fontFamily: {
            outfit: "var(--font-outfit)",
            abhaya: "var(--font-abhaya)",
            amiko: "var(--font-amiko)",
            orelega: "var(--font-orelega)",
        },
        screens: {
            sm: "425px",
            md: "550px",
            lg: "625px",
            tb: "768px",
        },
    },
    plugins: [require("@designbycode/tailwindcss-text-stroke")],
}
export default config
