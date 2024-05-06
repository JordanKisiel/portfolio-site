import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
                300: "E0E0E0",
                900: "#161616",
            },
        },
    },
    plugins: [],
}
export default config
