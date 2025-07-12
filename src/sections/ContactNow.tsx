'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Snackbar from '../components/Snackbar';

export default function ContactNow() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleWhatsAppRedirect = () => {
        const { name, email, message } = formData;

        if (!message.trim()) {
            setError('Please enter a message before sending.');
            return;
        }

        if (email.trim() && !validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        const encodedMessage = encodeURIComponent(
            `Hi! I'm ${name || 'someone'},\n\n${message}\n\n(Reply me back at: ${email || 'N/A'})`
        );

        const whatsappURL = `https://wa.me/919337954743?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section
            id="contact-now"
            className="bg-white py-24 px-6 md:px-20 text-gray-800 relative"
        >
            {/* 🔔 Snackbar */}
            <Snackbar show={!!error} message={error} onClose={() => setError('')} />

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* 🔸 Right: Portrait Image */}
                <motion.div
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    className="rounded-xl overflow-hidden shadow-lg border-4 border-dashed border-blue-400 w-[70%] md:w-[75%] mx-auto"
                >
                    <Image
                        src="/contact.jpg"
                        alt="Contact Visual"
                        width={360}
                        height={500}
                        className="w-full h-auto object-cover rounded-xl aspect-[3/4]"
                    />
                </motion.div>
                {/* 🔹 Left: Styled Form */}
                <div className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-blue-100">
                    <h2 className="text-3xl font-extrabold text-blue-700 mb-8">
                        Contact Now
                    </h2>



                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                                placeholder=" "
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-4 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400"
                            >
                                Your Name
                            </label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-4 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400"
                            >
                                Your Email
                            </label>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm resize-none"
                                placeholder=" "
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-4 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400"
                            >
                                Your Message
                            </label>
                        </div>

                        {/* Send via WhatsApp */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition"
                            onClick={handleWhatsAppRedirect}
                        >
                            Send via WhatsApp
                        </motion.button>
                    </form>
                </div>


            </div>
        </section>
    );
}
