import { StaticImport } from "next/dist/shared/lib/get-img-props"

type Props = {
    image: string | StaticImport
    imageSize: string
    imagePosition: string
}

export default function CroppedImage({
    image,
    imageSize,
    imagePosition,
}: Props) {
    return (
        <div
            className={`rounded-[5px] overflow-hidden w-full h-48 mb-[0.625rem] ${image} ${imageSize} ${imagePosition}`}
        ></div>
    )
}
