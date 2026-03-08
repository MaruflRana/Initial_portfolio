import { motion } from 'framer-motion';

export default function TimelineCard({ item, index = 0 }) {
  return (
    <motion.article
      className="timeline-card glass-card"
      initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <div className="timeline-dot" />
      <span className="tag">{item.status}</span>
      <h3>{item.title}</h3>
      <p className="timeline-meta">{item.venue} • {item.role}</p>
      <div className="chip-row">
        {item.tags.map((tag) => (
          <span className="chip" key={tag}>{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}
