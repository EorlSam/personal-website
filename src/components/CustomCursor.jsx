import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'white',
                mixBlendMode: 'difference',
                pointerEvents: 'none',
                zIndex: 9999,
                x: mousePosition.x - 8, // Center the cursor
                y: mousePosition.y - 8, // Center the cursor
            }}
            animate={{
                scale: isClicking ? 0.8 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
            }}
        />
    );
};

export default CustomCursor;
