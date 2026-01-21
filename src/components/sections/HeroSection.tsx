import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Animated geometric elements */}
      <motion.div
        className="absolute top-20 left-10 w-px h-32 bg-geometric-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-20 left-10 w-32 h-px bg-geometric-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-px h-32 bg-geometric-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-px bg-geometric-accent"
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      
      {/* Diagonal accent line */}
      <motion.div
        className="absolute top-0 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-geometric-accent to-transparent rotate-45 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  Portfolio
                </span>
              </motion.div>

              <motion.h1
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter-custom mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {personalInfo.name}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {personalInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {personalInfo.bio}
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-foreground/20 hover:border-foreground hover:bg-transparent"
                  asChild
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-foreground/20 hover:border-foreground hover:bg-transparent"
                  asChild
                >
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-foreground/20 hover:border-foreground hover:bg-transparent"
                  asChild
                >
                  <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Optional Photo Placeholder */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                {/* Geometric frame */}
                <div className="absolute -inset-4 border border-geometric-accent" />
                <div className="absolute -inset-8 border border-geometric-line" />
                
                {/* Photo container */}
                <div className="w-48 h-48 md:w-64 md:h-64 bg-secondary flex items-center justify-center">
                  {personalInfo.photoUrl ? (
                    <img
                      src={personalInfo.photoUrl}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-4xl font-bold text-muted-foreground">
                      SS
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
