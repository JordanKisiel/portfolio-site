type Props = {
    foregroundColor: string
    foregroundOpacity: number
    backgroundColor: string
}

export default function BackToTopIcon({
    foregroundColor,
    foregroundOpacity,
    backgroundColor,
}: Props) {
    return (
        <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_16_30)">
                <circle
                    cx="22.2104"
                    cy="22.7896"
                    r="21.2104"
                    fill={backgroundColor}
                    shapeRendering="geometricPrecision"
                />
            </g>
            <path
                d="M24.741 10.5839C23.9599 9.8028 22.6936 9.8028 21.9126 10.5839L9.18465 
                   23.3118C8.4036 24.0928 8.4036 25.3592 9.18465 26.1402C9.96569 26.9212 
                   11.232 26.9212 12.0131 26.1402L23.3268 14.8265L34.6405 26.1402C35.4215 
                   26.9212 36.6879 26.9212 37.4689 26.1402C38.25 25.3592 38.25 24.0928 37.4689 
                   23.3118L24.741 10.5839ZM25.3268 37.3018L25.3268 11.9981L21.3268 11.9981L21.3268 
                   37.3018L25.3268 37.3018Z"
                fill={foregroundColor}
                fillOpacity={foregroundOpacity}
            />
            <defs>
                <filter
                    id="filter0_d_16_30"
                    x="0"
                    y="0.579102"
                    width="46.4209"
                    height="46.4209"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood
                        floodOpacity="0"
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
                        result="effect1_dropShadow_16_30"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_16_30"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}
