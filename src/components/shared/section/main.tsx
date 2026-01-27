export function MainContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <main className={className}>
            {children}
        </main>
    );
}