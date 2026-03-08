import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className={`project-card accent-${project.accent || 'cyan'}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="project-topline">
        <span className="tag">{project.category}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <div className="chip-row">
        {project.stack.map((item) => (
          <span className="chip" key={item}>{item}</span>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Link className="inline-link" to={`/projects/${project.slug}`}>
        View case study
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}
