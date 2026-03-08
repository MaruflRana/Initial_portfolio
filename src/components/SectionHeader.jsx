import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      className={`section-header ${align === 'center' ? 'center' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
