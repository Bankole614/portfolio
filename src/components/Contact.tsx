// Contact.jsx
import { Mail, Github, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mldleeyw");

  return (
    <section id="contact" className=" px-6 py-14 bg-dark-bg ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="md:text-4xl text-2xl text-gray-200  font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind, a question, or just want to say hello? I’d love to hear from you.
        </p>
        {/* Contact Info + Socials */}
        <div className="flex justify-center space-x-4 mt-6 text-gray-300">
          <a href="https://github.com/Bankole614" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
          </a>
          <a href="mailto:bankoleayobami01@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
          </a>
        </div>

        

        <form
          className="grid gap-6 text-black text-left"
         onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-gray-200 mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-200 mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-200 mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-gray-950 transition-all duration-300 hover:from-blue-800 hover:to-blue-400 hover:text-white font-medium py-3 px-4 rounded-md flex items-center justify-center"
          >
            {state.submitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-gray-950"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>`
        </form>
        {state.succeeded && (
          <div className=" mb-2 text-green-400 text-lg font-semibold">
            Thank you for reaching out! I’ll get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
