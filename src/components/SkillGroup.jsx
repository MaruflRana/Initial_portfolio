import { motion } from 'framer-motion';

export default function SkillGroup({ group, index = 0 }) {
  return (
    <motion.div
      className="skill-group glass-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <h3>{group.title}</h3>
      <div className="chip-row">
        {group.items.map((item) => (
          <span className="chip" key={item}>{item}</span>
        ))}
      </div>
    </motion.div>
  );
}
