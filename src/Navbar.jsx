import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/90 backdrop-blur-sm border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-white tracking-tighter">
                            Nithin<span className="text-[#8A9A5B]">.</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-white hover:text-[#8A9A5B] px-3 py-2 text-sm font-medium transition-colors">Home</a>
                            <a href="#about" className="text-gray-300 hover:text-[#8A9A5B] px-3 py-2 text-sm font-medium transition-colors">About</a>
                            <a href="#projects" className="text-gray-300 hover:text-[#8A9A5B] px-3 py-2 text-sm font-medium transition-colors">Projects</a>
                            <a href="#contact" className="text-gray-300 hover:text-[#8A9A5B] px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Hamburger) - Simplified for now */}
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8A9A5B]">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
