import { Card, CardContent } from "./ui/card";
import { GraduationCap, Briefcase, Award, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Mumbai",
    period: "2019 - 2022",
    gpa: "CGPA: 9.37",
    description: "Focused on web technologies and software development. ",
  },
  {
    degree: "Higher Secondary School",
    institution: "Konkan Board",
    period: "2018 - 2019",
    gpa: "Percentage: 60.62%",
    description: "Specialized in Mathematics & Science.",
  },
  {
    degree: "Secondary School",
    institution: "Konkan Board",
    period: "2016 - 2017",
    gpa: "Percentage: 91.60 %",
    description: "Strong foundation in core subjects with focus on computer science fundamentals.",
  },
];
const experience = [
  {
    role: "Web Developer",
    company: "Worldex India Exhibition & Promotion Pvt. Ltd.",
    period: "May 2023 - Present",
    description: [
      "Designed and developed scalable, high-performance web applications using React.js and Next.js.",
      "Implemented fully responsive UIs using Tailwind CSS and modern design principles.",
      "Led performance optimization efforts, reducing load times by up to 30% through code splitting, lazy loading, and asset compression.",
      "Maintained Git workflows for source control and collaborated with backend teams in Agile sprints.",
      "Contributed to SEO improvements and ensured cross-browser/device compatibility.",
      "Implemented best practices for clean code, accessibility, and responsive behavior.",
    ],
  },
];
const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Quastech Institute",
    year: "2023",
    link:"https://drive.google.com/file/d/1fILMOQ83jotMS6BTQrgdSLryiA6IUSSC/view"
  },
  {
    title: "Learn To Code For The Web",
    issuer: "FutureLearn",
    year: "2020",
    link:"https://drive.google.com/file/d/1F4cGbxQ_LLcwORY2LxorNvyICEfnOf-6/view"
  },

];

export function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <p className="text-sm text-primary uppercase tracking-widest font-semibold">
              Qualifications
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">My Resume</h2>
          </div>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="education" className="gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="experience" className="gap-2">
                <Briefcase className="w-4 h-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="certifications" className="gap-2">
                <Award className="w-4 h-4" />
                Certificates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="space-y-6">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative mb-8 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-8">
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                      <Card className="glass-card border-2 hover:border-primary/50 transition-all w-full md:w-[calc(50%-3rem)] md:ml-auto">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-bold leading-tight">
                              {item.degree}
                            </h3>
                            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.institution}
                          </p>
                          <p className="text-sm font-semibold text-primary">
                            {item.gpa}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="glass-card border-2 hover:border-primary/50 transition-all max-w-3xl mx-auto animate-fade-up"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          <TabsContent value="certifications" className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {certifications.map((cert, index) => (
      <Card
        key={index}
        className="glass-card border-2 hover:border-accent/50 transition-all hover:shadow-lg animate-fade-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <CardContent className="p-6 space-y-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            <Award className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-lg font-bold">{cert.title}</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{cert.issuer}</span>
            <span className="text-primary font-semibold">{cert.year}</span>
          </div>

          {/* Link button (only if cert.link exists) */}
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-primary font-semibold hover:underline mt-2"
            >
              View Certificate →
            </a>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>

          </Tabs>
        </div>
      </div>
    </section>
  );
}
