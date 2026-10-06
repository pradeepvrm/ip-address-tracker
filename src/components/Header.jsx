import bgDesktop from "../assets/pattern-bg-desktop.png";

export default function Header() {
    return (
        <header className="w-full overflow-hidden bg-slate-500">
            <img className="block h-[250px] w-full object-cover" src={bgDesktop} alt="header" />
        </header>
    )
}