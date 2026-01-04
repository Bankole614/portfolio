import { Card } from '@/components/ui/card';
import hisend from '@/asset/hisend_web.png';
import eportal from '@/asset/eportal.png';
import hunnovate from '@/asset/hunnovate.png';
import rightnow from '@/asset/rightnow.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.items.hisend.title'),
      description: t('projects.items.hisend.description'),
      image: hisend,
      technologies: ["Vue", "TypeScript", "Axios", "Pinia"],
      category: "Hi-send",
      path: "https://hisend.hunnovate.com",
    },
    {
      title: t('projects.items.eportal.title'),
      description: t('projects.items.eportal.description'),
      image: eportal,
      technologies: ["Vue", "Typescript", "Axios", "Pinia"],
      category: "Eportal Net",
      path: "https://portal.eportalnet.com",
    },
    {
      title: t('projects.items.hunnovate.title'),
      description: t('projects.items.hunnovate.description'),
      image: hunnovate,
      technologies: ["Vue", "Typescript", "Axios", "Pinia"],
      category: t('projects.categories.hunnovate'),
      path: "https://hunnovate.com",
    },
    {
      title: t('projects.items.rightnow.title'),
      description: t('projects.items.rightnow.description'),
      image: rightnow,
      technologies: ["React", "Typescript", "Flutter", "Dio", "Riverpod"],
      category: "RightNow",
      path: "https://rightnow-case-tracker.vercel.app",
    }
  ];

  return (
    <section id="projects" className="py-14 bg-black/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold mb-4 text-white">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {projects.map((project, index) => (
            <Link 
              to={project.path} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={project.title}
              className="h-full"
            >
              <Card 
                className="group flex flex-col justify-between overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-cyan-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6">
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
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 w-full hover:opacity-90 text-white px-4 py-3 rounded-md transition-all duration-300"
                      >
                        {t('projects.viewProject')}
                      </button>
                    </div>
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