'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 0 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
};

const transition = { duration: 0.8, ease: 'easeInOut' };

export default function Index({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={pathname}
                initial="hidden"
                animate="enter"
                variants={variants}
                transition={transition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
