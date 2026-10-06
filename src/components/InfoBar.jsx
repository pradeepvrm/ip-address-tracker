export default function InfoBar({response}) {
    const ip = response?.ip ?? '';
    const location = response?.location
        ? [
            response.location.city,
            response.location.region,
            response.location.country,
        ]
            .filter(Boolean)
            .join(', ') || ''
        : '';
    const timezone = response?.location?.timezone ? `UTC ${response.location.timezone}` : '';
    const isp = response?.as?.name ?? '';

    return (
        <section className="absolute left-1/2 z-[1000] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 -mt-20 sm:w-[calc(100%-3rem)]">
            <div className="grid grid-cols-1 gap-5 rounded-xl bg-white p-6 shadow-xl sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 lg:grid-cols-4 lg:gap-0 lg:p-8 lg:[&>div+div]:border-l lg:[&>div+div]:border-slate-200 lg:[&>div+div]:pl-6">
                <div className="flex min-w-0 flex-col gap-2">
                    <span className="text-sm font-bold tracking-[0.15em] text-slate-400">IP ADDRESS</span>
                    <span className="break-words text-md font-bold leading-tight text-slate-800 sm:text-2xl">{ip}</span>
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                    <span className="text-sm font-bold tracking-[0.15em] text-slate-400">LOCATION</span>
                    <span className="break-words text-md font-bold leading-tight text-slate-800 sm:text-2xl">{location}</span>
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                    <span className="text-sm font-bold tracking-[0.15em] text-slate-400">TIMEZONE</span>
                    <span className="break-words text-md font-bold leading-tight text-slate-800 sm:text-2xl">{timezone}</span>
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                    <span className="text-sm font-bold tracking-[0.15em] text-slate-400">ISP</span>
                    <span className="break-words text-md font-bold leading-tight text-slate-800 sm:text-2xl">{isp}</span>
                </div>
            </div>
        </section>
    )
}