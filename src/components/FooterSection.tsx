const FooterSection = () => {
  return (
    <footer className="py-12 bg-lazuli-dark border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-5">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* LEFT */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-heading text-2xl font-semibold text-primary-foreground">
              Espaço Lazuli
            </h3>

            <p className="text-lazuli-light font-body text-sm font-light max-w-xs">
              Estética, massoterapia e terapias integrativas para restaurar
              seu bem-estar físico e emocional.
            </p>

            <p className="text-lazuli-light/70 text-xs">
              Cachoeirinha • RS
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between text-center md:text-right space-y-4">

            <div className="text-lazuli-light/70 font-body text-sm space-y-1">
              <p>Rua Espírito Santo, 317</p>
              <p>2º andar — Cachoeirinha, RS</p>
            </div>

            <div className="text-lazuli-light/50 text-xs">
              <p>
                © {new Date().getFullYear()} Espaço Lazuli. Todos os direitos reservados.
              </p>

              <p className="mt-1">
                Desenvolvido por{" "}
                <span className="text-gold-light font-medium">
                  Elyra
                </span>
              </p>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-[11px] text-lazuli-light/40">
            Experiência pensada para seu conforto, bem-estar e transformação.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;