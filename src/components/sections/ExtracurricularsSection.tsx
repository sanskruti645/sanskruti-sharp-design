import { motion } from "framer-motion";
import { Rocket, Code, Calendar, GitBranch } from "lucide-react";
import { extracurriculars } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket className="h-5 w-5" />,
  code: <Code className="h-5 w-5" />,
  calendar: <Calendar className="h-5 w-5" />,
  "git-branch": <GitBranch className="h-5 w-5" />,
};

export function ExtracurricularsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="extracurriculars" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Beyond Academics
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter-custom mt-2">
            Activities
          </h2>
          <div className="w-16 h-px bg-foreground mt-6" />
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {extracurriculars.map((activity, index) => (
            <motion.article
              key={activity.id}
              className="sharp-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background flex-shrink-0">
                  {iconMap[activity.icon] || <Code className="h-5 w-5" />}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-display text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                      {activity.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      {activity.duration}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {activity.organization}
                  </p>

                  {Array.isArray(activity.description) ? (
                    <ul className="text-sm text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                      {activity.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
