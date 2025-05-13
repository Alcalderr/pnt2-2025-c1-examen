'use client';

import Link from "next/link";

export default function Header() {
    return (
    <header className="bg-red-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <h1 className="text-xl font-bold">Tecnoshare Movies</h1>
        </div>
    <nav>
        <Link href="/peliculas" className="text-white hover:underline">
            Ir a Películas
        </Link>
    </nav>
    </header>
    );
}