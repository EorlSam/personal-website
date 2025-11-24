import { motion } from 'framer-motion';
import content from '../content.json';

const About = () => {
    const { bio, birthDate, location } = content.about;

    return (
        <section style={{
            padding: 'var(--spacing-xl) var(--spacing-md)',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: 'var(--spacing-md)',
                    textAlign: 'center'
                }}>
                    The Alchemist
                </h2>

                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: 'var(--spacing-md)',
                    textAlign: 'justify',
                    color: 'var(--color-text-main)'
                }}>
                    {bio}
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--spacing-lg)',
                    marginTop: 'var(--spacing-lg)',
                    borderTop: '1px solid var(--color-gold-dim)',
                    paddingTop: 'var(--spacing-md)'
                }}>
                    <div>
                        <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Born</span>
                        <span>{new Date(birthDate).getFullYear()}</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Location</span>
                        <span>{location}</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
