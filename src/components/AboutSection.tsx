import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const stack = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'Hi-send', icon: 'src/asset/hisend.PNG' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen px-6 py-14 bg-black/10 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-4">{t('about.title')}</h2>

        <p className="text-lg text-gray-400 mb-8">
          {t('about.description1')}
        </p>

        <p className="text-md text-gray-300 mb-6">
          {t('about.description2')}
        </p>

        <p className="text-md text-gray-300 mb-6">
          {t('about.description3')} <span>{t('about.funFact')}</span>
        </p>

        {/* Tech Stack Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">{t('about.techStack')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-5">
            {stack.map((item) => (
              <div key={item.name} className="py-2 flex flex-col items-center space-y-2 border border-gray-700 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                <img src={item.icon} className="w-10" alt={item.name} />
                <p className='text-sm'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-gray-900 font-medium rounded-md transition-all duration-300 hover:from-blue-800 hover:to-blue-400 hover:text-white w-fit mx-auto">
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
          >
            {t('about.viewWork')}
          </button>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}

export default About;