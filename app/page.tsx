export default function Home() {
    return (
        <>
            <nav>
                <ul>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                </ul>
            </nav>
            <h1>Hi, I'm Jordan</h1>
            {/* texture overaly */}
            <div className="absolute inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-10 pointer-events-none"></div>
        </>
    )
}
