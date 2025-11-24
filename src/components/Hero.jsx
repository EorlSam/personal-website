import { motion } from 'framer-motion';
import content from '../content.json';

const Hero = () => {
    const { name, title, intro } = content.hero;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'var(--spacing-md)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ zIndex: 1 }}
            >
                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                        marginBottom: 'var(--spacing-sm)',
                        textShadow: '0 0 20px rgba(197, 160, 89, 0.3)'
                    }}
                >
                    {name}
                </motion.h1>
                <motion.h2
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                        color: 'var(--color-gold-dim)',
                        marginBottom: 'var(--spacing-lg)',
                        fontFamily: 'var(--font-body)',
                        fontStyle: 'italic',
                        fontWeight: 400
                    }}
                >
                    {title}
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)'
                    }}
                >
                    {intro}
                </motion.p>
            </motion.div>

            {/* Decorative background element */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(74, 4, 4, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />
        </section>
    );
};

export default Hero;
