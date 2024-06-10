import NavLinkList from "@/components/NavLinkList"

export default function DesktopNav() {
    return (
        <nav
            className={`w-full flex flex-row justify-center absolute left-[50%] -translate-x-[50%]`}
        >
            <ul
                className="flex flex-row justify-between px-4 pt-1 bg-neutral-200 rounded-full 
                           drop-shadow-[4px_4px_0px_rgba(22,22,22,1)] border-neutral-900 
                           border-2 max-w-[30rem] gap-8 uppercase font-amiko"
            >
                <NavLinkList
                    onClick={() => {
                        console.log("clicked")
                    }}
                />
            </ul>
        </nav>
    )
}
