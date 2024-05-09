type Props = {
    fill: string
}

export default function Arrow({ fill }: Props) {
    return (
        <svg
            width="20"
            height="49"
            viewBox="0 0 20 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.1863 22.9463C19.6747 23.6321 19.6812 24.5504 19.2026 
                   25.2431L3.64547 47.7605C2.53038 49.3745 -2.16817e-06 48.5853 
                   -2.08728e-06 46.6236L-2.57988e-07 2.25698C-1.77702e-07 
                   0.309765 2.4998 -0.489268 3.62921 1.09694L19.1863 22.9463Z"
                fill={fill}
            />
        </svg>
    )
}
