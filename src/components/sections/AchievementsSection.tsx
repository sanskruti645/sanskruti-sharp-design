import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="achievements" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Recognition
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter-custom mt-2">
            Achievements
          </h2>
          <div className="w-16 h-px bg-foreground mt-6" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              className="sharp-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-foreground/20 group-hover:border-foreground transition-colors" />

              <div className="flex items-start gap-3">
                <Award className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                
                <div>
                  <h3 className="font-display text-base font-semibold mb-1 group-hover:text-muted-foreground transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground mb-2">
                    {achievement.organization} • {achievement.year}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
