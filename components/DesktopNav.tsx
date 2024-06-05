export default function DesktopNav() {
    return (
        <nav className={`bg-neutral-100`}>
            <ul className="flex flex-col gap-10">
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
            </ul>
        </nav>
    )
}
