import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Props = {
    textOptions: {
        text: string
        textColor: string
        textWidth: string
    }
    iconOptions: {
        icon: StaticImport | string
        iconAlt: string
        iconPosX: string
        iconPosY: string
        iconRotation: string
        iconWidth: number
        iconHeight: number
    }
    badgeOptions: {
        bgColor: string
        leftSpacing: string
        rightSpacing: string
        badgeRotation: string
        isIconFirst: boolean
    }
}

export default function Flair({
    textOptions,
    iconOptions,
    badgeOptions,
}: Props) {
    return (
        <div className="w-4/5 relative flex flex-row justify-between">
            {/* left spacer */}
            <div className={`${badgeOptions.leftSpacing} h-[1rem]`}></div>
            <div
                className={`w-full flex flex-row items-center p-[0.625rem] rounded-[5px] 
                                   border-neutral-900 border-2 drop-shadow-[2px_2px_0px_rgba(22,22,22,1)] min-h-[4.5rem] px-5
                                   ${badgeOptions.bgColor} ${
                    badgeOptions.badgeRotation
                } 
                                   ${
                                       badgeOptions.isIconFirst
                                           ? "justify-end"
                                           : "justify-start"
                                   }`}
            >
                <p
                    className={`font-amiko uppercase text-xl ${
                        textOptions.textColor
                    } ${textOptions.textWidth} ${
                        badgeOptions.isIconFirst ? "text-right" : "text-left"
                    }`}
                >
                    {textOptions.text}
                </p>
            </div>
            {/* right spacer */}
            <div className={`${badgeOptions.rightSpacing} h-[1rem]`}></div>
            <Image
                className={`absolute ${iconOptions.iconRotation} ${iconOptions.iconPosX} ${iconOptions.iconPosY}`}
                src={iconOptions.icon}
                width={iconOptions.iconWidth}
                height={iconOptions.iconHeight}
                alt={iconOptions.iconAlt}
            />
        </div>
    )
}
