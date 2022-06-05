

function Subtitle({ subtitle, more = false }) {
    return (
        <header className="flex items-center justify-between mb-4">
            <p className="text-xl text-gray font-normal tracking-tight">{subtitle}</p>
        </header>
    )
}

export default Subtitle
