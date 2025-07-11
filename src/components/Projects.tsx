import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import hisend from '@/asset/hisend_web.png';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hi-send",
      description: "A Backend as a Service (BaaS) tool that provides a real-time database, authentication, storage, and APIs for building web and mobile applications and help developers master API integration and build end-to-end solutions.",
      image: hisend,
      technologies: ["Vue", "TypeScript", "Axios", "Pinia"],
      category: "Hi-send",
      path: "https://hisend.hunnovate.com/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Dillham Agro Enterprise",
      description: "An agricultural technology platform aimed at revolutionizing farm produce management. Focuses on transparency, efficiency, and sustainability.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "AgriTech",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Waste Management Web App",
      description: "A web application designed to improve waste management practices in Lagos Mainland, Nigeria, providing easy access to information and encouraging recycling.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "HTML5", "CSS3", "API Integration"],
      category: "Environmental",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "SEO-Web",
      description: "A website developed to test and analyze web SEO capabilities, enhancing visibility and search engine ranking for better discoverability.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "SEO Optimization"],
      category: "SEO Tools",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {projects.map((project, index) => (
            <Link to={project.path} target="_blank" rel="noopener noreferrer" key={project.title}>
              <Card 
                key={project.title}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-blue-500 to-cyan-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <button 
                      className={`bg-gradient-to-r from-blue-500 to-cyan-500 w-full hover:opacity-90 text-white px-4 py-3 rounded-md  transition-all duration-300`}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </Card>
            </Link>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;