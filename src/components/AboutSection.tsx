import { ArrowRight } from 'lucide-react';

export default function About() {

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


  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-gray-900/10 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-4">About Me</h2>

        <p className="text-lg text-gray-400 mb-8">
            I’m Ayobami Bankole, a frontend developer who values clean interfaces, meaningful interactions, and thoughtful user experiences. I focus on turning creative ideas into functional, accessible, and visually compelling digital products. I pay strong attention to detail, visual harmony, and intuitive user flow in every build.
        </p>



        <p className="text-md text-gray-300 mb-6">
          I come from a background in <span className="font-semibold text-indigo-500">Communications</span>, which means I think deeply about how users interact, perceive, and experience digital products. This helps me write cleaner interfaces, meaningful microcopy, and build with empathy.
        </p>

        <p className="text-md text-gray-300 mb-6">
          Whether it’s designing clean UIs, integrating APIs, or building full-stack platforms with tools like Supabase or Hi-send, I enjoy turning ideas into real, user-focused products. I'm especially interested in frontend performance, accessibility, and beautiful transitions. <span>Here’s a fun fact; I can spot misaligned buttons from 3 meters away🤪.</span>
        </p>

        {/* Tech Stack Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="grid grid-cols-8 gap-5 ">
            {stack.map((item) => (
              <div key={item.name} className="py-2 flex flex-col items-center space-y-2 border border-gray-700 rounded-lg bg-gray-900 hover:bg-gray-600 transition">
                <img src={item.icon} className="w-10" alt={item.name} />
                <p className='text-sm'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
