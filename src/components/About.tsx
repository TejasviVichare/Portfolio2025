import { Card, CardContent } from "./ui/card";
import { Code2, Laptop, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications using React, Next.js, and modern frameworks.",
    skills: ["React",  "Tailwind CSS", "Next.js"],
  },
  {
    icon: Laptop,
    title: "Responsive Design",
    description: "Creating beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.",
    skills: ["CSS3", "Flexbox", "Grid", "Mobile-First"],
  },
  {
    icon: Smartphone,
    title: "React Development",
    description: "Developing scalable applications with React ecosystem, including Redux and custom hooks.",
    skills: ["React Hooks", "Redux", "Context API"],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <p className="text-sm text-primary uppercase tracking-widest font-semibold">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">What I Do</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
