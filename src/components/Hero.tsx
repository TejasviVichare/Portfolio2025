import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
              Oh, 2025. I'm so ready.
            </p>
            <p className="text-5xl md:text-5xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="text-gradient">Tejasvi Vichare</span>
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground">
              a Frontend Developer.
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code, intuitive design, and bringing ideas to life 
            through elegant user interfaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 shadow-lg animate-glow">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/TejasviVichare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejasvi-vichare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tejasvivichare2121@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <a href="#about">
              <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
