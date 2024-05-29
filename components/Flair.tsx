import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Props = {
    textOptions: {
        text: string
        subtext?: string
        textColor: string
        textWidth: string
    }
    iconOptions: {
        icon: string | number
        iconAlt: string
        iconPosX: string
        iconPosY: string
        iconRotation: string
        iconWidth?: number
        iconHeight?: number
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
        <div className="w-4/5 min-w-[16.5rem] max-w-[18rem] relative flex flex-row justify-between">
            {/* left spacer */}
            <div
                className={`w-full ${badgeOptions.leftSpacing} ${badgeOptions.rightSpacing}`}
            >
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
                    <div
                        className={`${textOptions.textWidth} ${
                            badgeOptions.isIconFirst
                                ? "text-right"
                                : "text-left"
                        }`}
                    >
                        <p
                            className={`font-amiko uppercase text-xl ${textOptions.textColor}`}
                        >
                            {textOptions.text}
                        </p>
                        {textOptions.subtext && (
                            <p
                                className={`font-amiko uppercase text-[0.625rem] ${textOptions.textColor}`}
                            >
                                {textOptions.subtext}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {typeof iconOptions.icon === "number" ? (
                <p
                    className={`absolute font-orelega text-[7rem] text-neutral-900 text-stroke-2 text-stroke-red-100 [text-shadow:_5px_5px_0_rgb(21_21_21_/_100%)] ${iconOptions.iconRotation} ${iconOptions.iconPosX} ${iconOptions.iconPosY}`}
                >{`${iconOptions.icon}`}</p>
            ) : (
                <Image
                    className={`absolute ${iconOptions.iconRotation} ${iconOptions.iconPosX} ${iconOptions.iconPosY}`}
                    src={iconOptions.icon}
                    width={iconOptions.iconWidth}
                    height={iconOptions.iconHeight}
                    alt={iconOptions.iconAlt}
                />
            )}
        </div>
    )
}
