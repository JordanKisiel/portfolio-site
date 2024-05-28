type Props = {
    image: string
    imageSize: string
    imagePosition: string
    imageOpacity?: string
    height: string
    colorOverlay?: string
    isAnimatedOverlay?: boolean
}

export default function CroppedImage({
    image,
    imageSize,
    imagePosition,
    imageOpacity,
    height,
    colorOverlay,
    isAnimatedOverlay,
}: Props) {
    return (
        <div className="relative rounded-[5px] overflow-hidden">
            {colorOverlay && (
                <div
                    className={`absolute inset-0 z-10 mix-blend-screen opacity-50 ${colorOverlay}`}
                ></div>
            )}
            <div
                className={`w-full bg-no-repeat 
                            ${image} ${imageSize} ${imagePosition} ${height} ${
                    imageOpacity ?? ""
                }`}
            ></div>
            {isAnimatedOverlay && (
                <div className="absolute inset-0 thumbOverlay mix-blend-multiply opacity-50"></div>
            )}
            {colorOverlay && (
                <div className={`absolute inset-0 -z-10 ${colorOverlay}`}></div>
            )}
        </div>
    )
}
