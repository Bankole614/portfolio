import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="text-sm text-muted-foreground text-center">
          {t('footer.copyright', { 
            year: currentYear, 
            name: 'Emmanuel Bankole' 
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;