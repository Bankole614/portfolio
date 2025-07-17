import { Mail, Github, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useRef, useEffect } from 'react';
import { toast } from "../components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mldleeyw");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.description'),
        variant: "default"
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded, t]);

  return (
    <section id="contact" className="px-6 py-14 bg-dark-bg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="md:text-4xl text-2xl text-gray-200 font-bold mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-gray-400 mb-8">
          {t('contact.subtitle')}
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-6 text-gray-300">
          <a href="https://github.com/Bankole614" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
          </a>
          <a href="https://linkedin.com/in/emmanuel-bankole-a82362224" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
          </a>
          <a href="mailto:bankoleayobami01@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          className="grid gap-6 text-black text-left"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-gray-200 mb-2 text-sm font-medium">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
            <ValidationError 
              prefix={t('contact.form.name')} 
              field="name"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-200 mb-2 text-sm font-medium">
              {t('contact.form.email')}
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
            <ValidationError 
              prefix={t('contact.form.email')} 
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-200 mb-2 text-sm font-medium">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
            <ValidationError 
              prefix={t('contact.form.message')} 
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
                {t('contact.form.sending')}
              </>
            ) : (
              t('contact.form.submit')
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;