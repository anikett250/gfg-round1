export default function Navbar(){
    return(
        <nav className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-black/20 px-6 py-5 backdrop-blur-md sm:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <a href="#top" className="flex items-center gap-3 text-xs font-bold tracking-[0.28em] text-white">
                    <span className="grid h-8 w-8 place-items-center border border-[#e94335] text-[10px] text-[#ff634f]">STK</span>
                    STARK INDUSTRIES
                </a>
                <div className="hidden items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:flex">
                    <a className="text-white" href="#mission">Mission</a>
                    <a className="transition-colors hover:text-white" href="#armor">Armor</a>
                    <a className="transition-colors hover:text-white" href="#systems">Systems</a>
                    <a className="transition-colors hover:text-white" href="#event">Event</a>
                </div>
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/50">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f05a47]" />
                    Live archive
                </div>
            </div>
        </nav>
    )
}