import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
    className?: string;
    delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay }}
        >
            {children}
        </motion.div>
    );
}
