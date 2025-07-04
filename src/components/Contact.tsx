// Contact.jsx
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-14 bg-dark-bg text-gray-200 ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind, a question, or just want to say hello? I’d love to hear from you.
        </p>
        {/* Contact Info + Socials */}
        <div className="flex justify-center space-x-6 mb-10 text-gray-600 dark:text-gray-300">
          <a
            href="mailto:you@example.com"
            aria-label="Email"
            className="hover:text-blue-600 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black dark:hover:text-white transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="grid gap-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            // Replace with API logic or Formspree
            alert('Message submitted (connect to backend here)');
          }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-gray-950 transition-all duration-300 hover:from-blue-800 hover:to-blue-400 hover:text-white font-medium py-3 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
