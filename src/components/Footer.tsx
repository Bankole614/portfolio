const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-4">
         <div className="text-sm text-muted-foreground text-center">
          © {currentYear} Emmanuel Bankole. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;