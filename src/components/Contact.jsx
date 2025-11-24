import { motion } from 'framer-motion';
import content from '../content.json';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const { email, github, linkedin } = content.contact;

    return (
        <footer style={{
            padding: 'var(--spacing-xl) var(--spacing-md)',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: 'var(--spacing-xl)'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Connect</h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    <a href={`mailto:${email}`} aria-label="Email">
                        <Mail size={24} />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <Github size={24} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                </div>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Samuel Fernandez Toledo. All rights reserved.
                </p>
            </motion.div>
        </footer>
    );
};

export default Contact;
