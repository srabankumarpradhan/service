'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './About.css';

const carouselImages = ['/taj.jpg', '/konark.jpg', '/puri.jpg'];

export default function About() {
    const [current, setCurrent] = useState(0);

    // Auto-rotate every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="bg-white py-24 px-6 md:px-16 text-gray-800">
            {/* 🔹 Section 1: About Us */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                {/* Left: Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">About Us!</h2>
                    <p className="text-base leading-relaxed">
                        At the heart of our work is <span className="font-semibold text-blue-600">innovation, affordability, and startup empowerment</span>. We’re not an agency — we’re a solo venture with a vision to support ambitious entrepreneurs in their digital journey.
                    </p>
                    <p className="mt-4 text-base">
                        We offer <strong>dedicated support, idea validation, market analysis</strong> and personalized consultations. Our goal is to <span className="text-blue-700 font-medium">maximize quality and minimize startup cost</span> while still delivering real-world digital solutions.
                    </p>
                    <p className="mt-4 text-base italic text-blue-600">
                        You're not just buying a service; you're starting a partnership with someone who believes in your mission.
                    </p>
                </div>

                {/* Right: Image */}
                <motion.div
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    className="border-4 border-dashed border-blue-500 p-2 rounded-xl transition-all duration-300"
                >
                    <Image
                        src="/company2.jpeg"
                        alt="Company Environment"
                        width={800}
                        height={800}
                        className="rounded-lg object-cover w-full h-auto aspect-[0/16]"
                    />
                </motion.div>
            </div>

            {/* 🔹 Section 2: Location & Culture */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: 3D Flip Carousel */}
                <div className="relative perspective-[1200px] h-[400px]">
                    <motion.div
                        key={current} // triggers animation on index change
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: -90, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="rounded-xl shadow-md w-full h-full backface-hidden"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <Image
                            src={carouselImages[current]}
                            alt={`Slide ${current}`}
                            width={600}
                            height={400}
                            className="rounded-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-4 absolute bottom-0 left-1/2 -translate-x-1/2">
                        {carouselImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full transition ${current === idx ? 'bg-blue-600' : 'bg-blue-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Description */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Where are we based?</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        We proudly operate from <strong>India</strong> — a growing digital powerhouse backed by
                        young, passionate minds. The Indian IT market is fueled by innovation, speed, and an unbeatable work ethic. We bring that same energy to every project.
                    </p>
                    <p className="mt-4 text-sm text-blue-500 italic">
                        India’s tech youth are rewriting global tech trends — and you get that energy when you work with us.
                    </p>
                </div>
            </div>
        </section>
    );
}
