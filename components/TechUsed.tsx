import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Props = {
    logo: string | StaticImport
    logoAlt: string
    logoSize: number
    label: string
    paddingY: string
}

export default function TechUsed({
    logo,
    logoAlt,
    logoSize,
    label,
    paddingY,
}: Props) {
    return (
        <div className="w-full">
            <div
                className={`flex flex-row justify-center items-center bg-orange-100 rounded-[4px] 
                w-full border-[1px] border-[#EFEFEF] shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] 
                max-h-12 mb-2 ${paddingY}`}
            >
                <Image
                    src={logo}
                    alt={logoAlt}
                    width={logoSize}
                />
            </div>
            <p className="font-abhaya text-center leading-3">{label}</p>
        </div>
    )
}
