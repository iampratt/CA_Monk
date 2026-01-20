
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f1115] text-gray-400 py-12 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand */}
                <div className="flex items-center gap-2 text-white">
                    <div className="bg-white text-black p-1 rounded">
                        <span className="font-bold text-xs">CA</span>
                    </div>
                    <span className="font-bold text-lg">CA MONK</span>
                </div>

                <p>© {currentYear} CA Monk. All rights reserved.</p>
            </div>
        </footer>
    );
}
