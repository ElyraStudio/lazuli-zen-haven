const FooterSection = () => {
  return (
    <footer className="py-10 bg-lazuli-dark">
      <div className="container max-w-5xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-1">
              Espaço Lazuli
            </h3>
            <p className="text-lazuli-light font-body text-sm font-light">
              Estética &bull; Massoterapia &bull; Terapias Integrativas
            </p>
          </div>
          <div className="text-lazuli-light/60 font-body text-xs">
            <p>Rua Espírito Santo, 317 — 2º andar — Cachoeirinha, RS</p>
            <p className="mt-1">© {new Date().getFullYear()} Espaço Lazuli. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
