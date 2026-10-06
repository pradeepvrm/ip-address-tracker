import bgDesktop from "../assets/pattern-bg-desktop.png";

export default function Header({ children }) {
    return (
        <header className="relative flex h-[250px] w-full flex-col items-center gap-6 overflow-hidden px-6 pt-8">
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src={bgDesktop}
                alt=""
                aria-hidden="true"
            />
            <div className="relative z-10 flex w-full flex-col items-center gap-6">
                {children}
            </div>
        </header>
    )
}