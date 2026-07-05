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
        variant: "default",
        duration: 3000,
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded, t]);

  return (
    <section id="contact" className="container py-14 bg-dark-bg">
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
          <a href="https://www.behance.net/bankoleayobami1" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <svg className="w-6 h-6 hover:text-gradient-start transition-all duration-300" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
            </svg>
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
              className="w-full px-4 py-2 border rounded-md"
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