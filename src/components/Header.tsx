export function Header() {
    return (
        <header className="border-b border-border bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="bg-primary text-primary-foreground p-1 rounded">
                        <span className="font-bold text-xs">CA</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">CA MONK</span>
                </div>
            </div>
        </header>
    );
}
