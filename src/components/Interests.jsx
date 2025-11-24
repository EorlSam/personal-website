import { motion } from 'framer-motion';
import content from '../content.json';
import { Brain, Code, Sparkles } from 'lucide-react';

const iconMap = {
    "Technology": Code,
    "Spirituality": Sparkles,
    "Psychology": Brain
};

const Interests = () => {
    const { interests } = content;

    return (
        <section style={{
            padding: 'var(--spacing-xl) var(--spacing-md)',
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5), transparent)'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-lg)',
                        textAlign: 'center'
                    }}
                >
                    Realms of Study
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {interests.map((interest, index) => {
                        const Icon = iconMap[interest.category] || Sparkles;

                        return (
                            <motion.div
                                key={interest.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid var(--color-gold-dim)',
                                    padding: 'var(--spacing-md)',
                                    borderRadius: '4px',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '1rem',
                                    background: 'rgba(197, 160, 89, 0.1)',
                                    borderRadius: '50%',
                                    marginBottom: 'var(--spacing-sm)',
                                    color: 'var(--color-gold)'
                                }}>
                                    <Icon size={32} />
                                </div>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.5rem' }}>{interest.category}</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {interest.items.map(item => (
                                        <li key={item} style={{
                                            marginBottom: '0.5rem',
                                            color: 'var(--color-text-muted)'
                                        }}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Interests;
