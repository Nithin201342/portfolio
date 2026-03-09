import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollValues = window.scrollY;
            setScrolled(scrollValues > 50);

            // If the About section hasn't scrolled into view yet, we're in the Hero / Home zone
            const aboutEl = document.getElementById('about');
            if (!aboutEl || aboutEl.getBoundingClientRect().top > window.innerHeight * 0.5) {
                setActiveSection('home');
                return;
            }

            // Scroll Spy for real content sections
            const sections = ['about', 'work', 'projects', 'skills', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#work' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-2xl`}>
            <div className={`
                relative px-6 py-3 rounded-full border transition-all duration-300
                ${scrolled ? 'bg-zinc-900/60 backdrop-blur-md border-white/10 shadow-lg shadow-cyan-900/10' : 'bg-transparent border-transparent'}
            `}>
                <div className="flex items-center justify-center relative">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === (link.href === '#' ? 'home' : link.href.substring(1));
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                                        ${isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                                    `}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            style={{ zIndex: -1 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all block text-center"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
