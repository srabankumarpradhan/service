'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

const images = ['/imagex.jpg', '/image1.jpg', '/imagey.jpg', '/image1.jpg'];
const backgroundVideos = ['/back2.mp4', '/back1.mp4'];

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoIndex, setVideoIndex] = useState(0);
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    // 🔁 Swap background videos
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnded = () => {
            setVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
        };

        video.addEventListener('ended', handleEnded);
        return () => video.removeEventListener('ended', handleEnded);
    }, [videoIndex]);

    // ⏩ Loop image strip left-to-right
    useEffect(() => {
        controls.start({
            x: ['0%', '-50%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: 25,
                },
            },
        });
    }, [controls]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden text-white flex flex-col justify-center items-center px-4 py-8 gap-6" id="hero">

            {/* 🎥 Background Video */}
            <video
                ref={videoRef}
                key={backgroundVideos[videoIndex]}
                className="absolute inset-0 w-full h-full object-cover -z-30"
                autoPlay
                muted
                loop={false}
                playsInline
            >
                <source src={backgroundVideos[videoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 🌑 Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* 🧠 Headline */}
            {/* 🧠 Headline */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-xl max-w-4xl mx-auto">
                    Your Digital Identity Starts With A Presence That Commands Attention.
                </h1>
            </motion.div>

            {/* 📍 Location Info */}
            <div className="relative z-10 mt-4 flex items-center gap-2 text-blue-300 text-sm md:text-base">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-blue-400"
                >
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 4.43 5.491 11.107 6.257 12.018a1 1 0 0 0 1.486 0C13.509 20.107 19 13.43 19 9c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span className="text-white font-medium">Odisha, India</span>
            </div>


            {/* 🔁 Flowing Images */}
            <div className="relative z-20 overflow-hidden w-full max-w-[100vw] mt-6 px-4">
                <motion.div
                    ref={containerRef}
                    animate={controls}
                    className="flex gap-8 w-max"
                >
                    {images.concat(images).map((src, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="relative border-2 border-dashed border-blue-400 rounded-xl shadow-lg hover:z-50 overflow-visible"
                        >
                            <Image
                                src={src}
                                alt={`Image ${i}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-auto max-w-[380px] object-cover rounded-xl"
                                priority
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* 📣 Quote + CTA */}
            <div className="relative z-10 text-center mt-6">
                <p className="text-base text-gray-200 italic mb-3">
                    "Let technology tell your story while you focus on building it."
                </p>
                <motion.a
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    href="#services"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
                >
                    Make me digital
                </motion.a>
            </div>
        </section>
    );
}
