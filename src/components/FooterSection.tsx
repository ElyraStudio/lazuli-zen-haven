const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-semibold text-primary-foreground mb-1">
              Espaço Lazuli
            </h3>
            <p className="text-lazuli-light font-body text-sm font-light">
              Estética &bull; Bem-estar &bull; Equilíbrio
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-lazuli-light font-body text-sm font-light">
              Cachoeirinha, RS
            </p>
            <p className="text-lazuli-light/60 font-body text-xs mt-2">
              © {new Date().getFullYear()} Espaço Lazuli. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
