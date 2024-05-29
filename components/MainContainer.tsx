type Props = {
    children: JSX.Element
}

export default function MainContainer({ children }: Props) {
    return (
        <main className="relative overflow-x-hidden pt-5 px-5 sm:px-10 md:px-24 lg:px-28">
            {children}
        </main>
    )
}