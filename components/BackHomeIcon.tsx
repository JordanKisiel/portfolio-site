type Props = {
    foregroundColor: string
    foregroundOpacity: number
    backgroundColor: string
}

export default function backHomeIcon({
    foregroundColor,
    foregroundOpacity,
    backgroundColor,
}: Props) {
    return (
        <svg
            width="68"
            height="39"
            viewBox="0 0 68 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_11_27)">
                <path
                    d="M14.1191 2.36581C14.8786 1.49785 15.9758 1 17.1292 1H61C63.2091 1 65 2.79086 65 5V32C65 34.2091 63.2091 36 61 36H17.1292C15.9759 36 14.8786 35.5021 14.1191 34.6342L2.30519 21.1342C0.985391 19.626 0.985393 17.374 2.30519 15.8658L14.1191 2.36581Z"
                    fill={backgroundColor}
                    fill-opacity={`${foregroundOpacity}`}
                    shape-rendering="crispEdges"
                />
            </g>
            <path
                d="M54.9924 18.4756C54.9924 19.3545 54.2371 20.043 53.3811 20.043H51.7699L51.8051 27.8652C51.8051 27.9971 51.7951 28.1289 51.78 28.2607V29.0469C51.78 30.126 50.8787 31 49.7659 31H48.9603C48.9049 31 48.8495 31 48.7941 30.9951C48.7236 31 48.6531 31 48.5827 31H46.9462H45.7378C44.625 31 43.7237 30.126 43.7237 29.0469V27.875V24.75C43.7237 23.8857 43.0037 23.1875 42.1125 23.1875H38.89C37.9988 23.1875 37.2787 23.8857 37.2787 24.75V27.875V29.0469C37.2787 30.126 36.3774 31 35.2647 31H34.0562H32.45C32.3745 31 32.299 30.9951 32.2234 30.9902C32.163 30.9951 32.1026 31 32.0422 31H31.2366C30.1238 31 29.2225 30.126 29.2225 29.0469V23.5781C29.2225 23.5342 29.2225 23.4854 29.2275 23.4414V20.043H27.6112C26.7049 20.043 26 19.3594 26 18.4756C26 18.0361 26.1511 17.6455 26.5035 17.3037L39.4136 6.39062C39.7661 6.04883 40.1689 6 40.5214 6C40.8738 6 41.2766 6.09766 41.5788 6.3418L54.4385 17.3037C54.8413 17.6455 55.0427 18.0361 54.9924 18.4756Z"
                fill={foregroundColor}
            />
            <defs>
                <filter
                    id="filter0_d_11_27"
                    x="0.315308"
                    y="0"
                    width="67.6847"
                    height="39"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset
                        dx="1"
                        dy="1"
                    />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                        in2="hardAlpha"
                        operator="out"
                    />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_11_27"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_11_27"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}
