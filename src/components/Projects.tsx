import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Boco.agency",
    description: "A modern website built with Next.js and Tailwind CSS, seamlessly connected to a Strapi backend for dynamic content management.",
    tags: ["React", "Strapi",  "Tailwind CSS"],
    github: "https://github.com/TejasviVichare/boco.agency.strapi",
    live: "https://boco-agency-next-js.vercel.app/",
     image: "/images/boco-agency.png", 
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills with smooth animations and responsive design. Built with modern web technologies.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "/images/portfolio.jpg", 

  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce application with shopping cart, product filtering, and checkout flow. Optimized for performance and SEO.",
    tags: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/TejasviVichare/cart/tree/main/my-cart",
    live: "https://ecommerce-tau-weld.vercel.app/",
    image: "/images/ecommerce.png", 
  },
  {
    title: "Hacker News Search",
    description: "Integrated the API to fetch and display real-time news articles based on user search queries. Implemented features like dynamic search, pagination, and article preview with optimized data fetching for fast performance.",
    tags: ["Next.js", "API Integration", "Tailwind CSS"],
    github: "https://github.com/TejasviVichare/HackerNewsSearch",
    live: "https://hacker-news-search-seven.vercel.app/",
    image: "/images/hackernews.jpg", 
  },
  // {
  //   title: "Task Manager",
  //   description: "A collaborative task management tool with drag-and-drop functionality. Includes user authentication and real-time updates.",
  //   tags: ["React", "DnD Kit", "Supabase"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "Courses Portal",
  //   description: "An online learning platform with course management, progress tracking, and interactive quizzes. Built with modern React patterns.",
  //   tags: ["React", "TypeScript", "React Query"],
  //   github: "#",
  //   live: "#",
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <p className="text-sm text-accent uppercase tracking-widest font-semibold">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-card border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="gap-2 flex-1">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
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
