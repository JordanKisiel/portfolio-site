type Props = {
    image: string
    imageSize: string
    imagePosition: string
    height: string
    colorOverlay?: string
}

export default function CroppedImage({
    image,
    imageSize,
    imagePosition,
    height,
    colorOverlay,
}: Props) {
    return (
        <div className="relative">
            {colorOverlay && (
                <div
                    className={`absolute inset-0 z-10 mix-blend-screen opacity-50 ${colorOverlay}`}
                ></div>
            )}
            <div
                className={`rounded-[5px] overflow-hidden w-full mb-[0.625rem] bg-no-repeat ${image} ${imageSize} ${imagePosition} ${height}`}
            ></div>
        </div>
    )
}
