export function BlobHero() {
    return (
        <>
            <div className="absolute -top-12 -right-12 z-0 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-600/20" />
            <div className="absolute -bottom-12 -left-12 z-0 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl dark:bg-purple-600/10" />
        </>
    );
}

export function BlobFeatures() {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
    );
}