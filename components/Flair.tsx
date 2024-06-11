"use client"

import Image from "next/image"
import { useWindowSize } from "@uidotdev/usehooks"

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
        iconWidth?: string
        iconHeight?: string
    }
    badgeOptions: {
        bgColor: string
        leftSpacing: string
        rightSpacing: string
        badgeRotation: string
        isIconFirst: boolean
        order: string
        alignment: string
    }
}

{
    /* BREAK THIS COMPONENT INTO SMALLER COMPONENTS
    THE NUMBER OF PROPS IS A DEAD GIVEAWAY THAT
    THIS COMPONENT IS DOING TOO MUCH
    */
}

export default function Flair({
    textOptions,
    iconOptions,
    badgeOptions,
}: Props) {
    let { width } = useWindowSize()

    width = width === null ? 100 : width

    return (
        <div
            className={`w-4/5 min-w-[16.5rem] max-w-[18rem] relative flex flex-row justify-between 
                        tb:min-w-[5rem] tb:max-w-[12rem] dt:min-w-[8rem] dt:max-w-[15rem] 
                        ${badgeOptions.order} ${badgeOptions.alignment}`}
        >
            <div
                className={`w-full ${badgeOptions.leftSpacing} ${badgeOptions.rightSpacing}`}
            >
                <div
                    className={`w-full flex flex-row items-center p-[0.625rem] rounded-[5px] 
                                   border-neutral-900 border-2 drop-shadow-[2px_2px_0px_rgba(22,22,22,1)] 
                                   min-h-[4.5rem] px-5 tb:min-h-[4rem] tb:max-h-[4rem] dt:min-h-[4.5rem]
                                   dt:max-h-[4.5rem]
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
                            className={`font-amiko uppercase text-xl tb:text-sm dt:text-base ${textOptions.textColor}`}
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
                    className={`absolute font-orelega text-[7rem] text-neutral-900 text-stroke-2 text-stroke-red-100 
                               [text-shadow:_5px_5px_0_rgb(21_21_21_/_100%)] tb:text-[6rem] dt:text-[7rem] 
                               ${iconOptions.iconRotation} ${iconOptions.iconPosX} ${iconOptions.iconPosY}`}
                >{`${iconOptions.icon}`}</p>
            ) : (
                <div
                    className={`absolute ${iconOptions.iconWidth} ${iconOptions.iconHeight} ${iconOptions.iconRotation} 
                    ${iconOptions.iconPosX} ${iconOptions.iconPosY}`}
                >
                    <Image
                        className={``}
                        src={iconOptions.icon}
                        alt={iconOptions.iconAlt}
                        fill={true}
                    />
                </div>
            )}
        </div>
    )
}
