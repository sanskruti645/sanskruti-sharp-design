import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { publications } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PublicationsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="publications" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Research
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter-custom mt-2">
            Publications
          </h2>
          <div className="w-16 h-px bg-foreground mt-6" />
        </motion.div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="sharp-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-secondary">
                        {pub.year}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      {pub.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {pub.venue}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors geometric-underline self-start"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Paper
                    </a>
                  )}
                </div>
              </div>
              
              {/* Separator */}
              {index < publications.length - 1 && (
                <div className="section-divider mt-8" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
