'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Snackbar({
  show,
  message,
  onClose,
}: {
  show: boolean;
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed z-[9999] bottom-6 md:bottom-8 px-4 py-3 bg-red-500 text-white rounded-xl shadow-lg font-semibold text-sm max-w-xs w-full md:right-8 md:left-auto left-1/2 md:translate-x-0 -translate-x-1/2"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
