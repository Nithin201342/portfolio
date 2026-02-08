import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className, variants }) => {
    const defaultVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            variants={variants || defaultVariants}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
