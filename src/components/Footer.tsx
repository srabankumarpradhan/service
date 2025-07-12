'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-16 text-gray-700 border-t border-gray-300 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

        {/* 🔹 Logo + Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <span className="text-3xl font-extrabold text-blue-700">PIXCODS</span>
          <p className="mt-2 text-sm text-gray-600 max-w-md">
            Empowering startups and small businesses in India and beyond with high-quality digital solutions — without the agency price tag. We combine strategy, design, and code to build tools that *work* and brands that *shine*.
          </p>
        </motion.div>

        {/* 🔸 Extra Info (optional future links) */}
        <div className="text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PIXCODS. All rights reserved.</p>
          <p className="mt-1">Crafted with 💡 in Odisha, India</p>
        </div>
      </div>
    </footer>
  );
}
