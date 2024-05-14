type Props = {
    image: string
    imageSize: string
    imagePosition: string
    imageOpacity?: string
    height: string
    colorOverlay?: string
}

export default function CroppedImage({
    image,
    imageSize,
    imagePosition,
    imageOpacity,
    height,
    colorOverlay,
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
            {colorOverlay && (
                <div className={`absolute inset-0 -z-10 ${colorOverlay}`}></div>
            )}
        </div>
    )
}
