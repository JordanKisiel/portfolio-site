type Props = {
    children: JSX.Element
}

export default function MainContainer({ children }: Props) {
    return (
        <main className="flex flex-col items-center relative overflow-x-hidden pt-5 px-5 sm:px-10 md:px-24 lg:px-28 tb:px-5">
            {children}
        </main>
    )
}
