import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="experience" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Career
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter-custom mt-2">
            Experience
          </h2>
          <div className="w-16 h-px bg-foreground mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative pl-8 md:pl-24"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 bg-foreground" />

                {/* Content */}
                <div className="sharp-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <p className="font-mono">{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-3"
                      >
                        <span className="w-1 h-1 bg-foreground mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
