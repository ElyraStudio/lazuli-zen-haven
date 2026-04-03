import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-5">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >

            <p className="font-accent text-accent text-lg">
              Sobre o Espaço
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Cuidado que vai além da estética
            </h2>

            <p className="text-muted-foreground font-body font-light leading-relaxed">
              À frente do Espaço Lazuli está <span className="font-medium text-foreground">Camila Vargas</span>, 
              massoterapeuta naturopata com mais de 8 anos de experiência na área da saúde.
            </p>

            <p className="text-muted-foreground font-body font-light leading-relaxed">
              Seu trabalho une massagem clínica, estética e terapias integrativas, 
              com um olhar profundo sobre o corpo como um todo — respeitando a fisiologia 
              e a individualidade de cada cliente.
            </p>

            <p className="text-muted-foreground font-body font-light leading-relaxed">
              Cada atendimento é pensado de forma personalizada, utilizando o toque como 
              ferramenta de reabilitação, equilíbrio e bem-estar real.
            </p>

          </motion.div>

          {/* BLOCO DE DESTAQUE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary rounded-2xl p-8 md:p-10 shadow-sm space-y-5"
          >

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
              Um refúgio terapêutico
            </h3>

            <p className="text-muted-foreground font-body font-light leading-relaxed text-sm md:text-base">
              Após anos de experiência e aperfeiçoamento, o Espaço Lazuli foi criado 
              como um ambiente pensado para acolher, cuidar e restaurar.
            </p>

            <p className="text-muted-foreground font-body font-light leading-relaxed text-sm md:text-base">
              Mais do que um consultório, é um espaço onde cada detalhe foi planejado 
              para proporcionar conforto, conexão e equilíbrio.
            </p>

            {/* DIFERENCIAL */}
            <div className="pt-4 border-t border-border space-y-2">
              <p className="text-sm text-foreground font-medium">
                • Atendimento humanizado
              </p>
              <p className="text-sm text-foreground font-medium">
                • Técnicas personalizadas
              </p>
              <p className="text-sm text-foreground font-medium">
                • Visão holística do corpo
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;