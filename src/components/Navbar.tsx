'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" }, // ✅ lowercase
    { label: "Contact", href: "#contact" },
    { label: "Client guides", href: "#basic" },
];

export default function Navbar() {
    const [active, setActive] = useState<string>("hero");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id) setActive(id);
                }
            });
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        });

        const sections = document.querySelectorAll("section[id]");
        sections.forEach(sec => observer.observe(sec));

        return () => sections.forEach(sec => observer.unobserve(sec));
    }, []);

    useEffect(() => {
        const activeLink = navRefs.current[active];
        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            setIndicatorStyle({
                left: activeLink.offsetLeft,
                width: rect.width,
            });
        }
    }, [active]);

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-4"
        >
            <div className="text-2xl font-bold text-blue-600">PIXCODS</div>

            <div className="relative hidden md:flex gap-6 items-center">
                {/* 👇 Dynamic Sliding Indicator */}
                <motion.div
                    className="absolute bottom-0 h-[3px] bg-blue-600 rounded-full"
                    animate={indicatorStyle}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ position: 'absolute' }}
                />

                {navItems.map((item) => {
                    const sectionId = item.href.replace("#", "");
                    return (
                        <a
                            key={item.href}
                            href={item.href}
                            ref={(el) => {
                                if (el) navRefs.current[sectionId] = el;
                            }}
                            className={`relative font-medium text-gray-700 transition duration-300 hover:text-blue-600 pb-1`}
                        >
                            <span className="hover-underline">{item.label}</span>
                        </a>

                    );
                })}
            </div>

            {/* <motion.button

                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                Direct Contact
            </motion.button> */}

            <div>
                <a
                    href="https://wa.me/919337954743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition"
                >
                    Direct contact
                </a>
            </div>
        </motion.nav>
    );
}
