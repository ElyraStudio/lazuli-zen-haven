import { motion } from "framer-motion";
import { MapPin, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-4">
            Sobre nós
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Seu refúgio em Cachoeirinha
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-2xl mx-auto leading-relaxed text-lg">
            No Espaço Lazuli, acreditamos que beleza e bem-estar caminham juntos. 
            Nosso ambiente foi pensado para ser um oásis de tranquilidade — um lugar 
            onde o tempo desacelera e cada detalhe convida você a se reconectar consigo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Heart,
              title: "Atendimento Humanizado",
              text: "Cada pessoa é única. Nossos protocolos são personalizados para atender suas necessidades com acolhimento e empatia.",
            },
            {
              icon: Sparkles,
              title: "Experiência Transformadora",
              text: "Mais do que tratamentos, oferecemos momentos de reconexão. Você sai renovada, mais leve e com a autoestima elevada.",
            },
            {
              icon: MapPin,
              title: "Fácil Acesso",
              text: "Localizada em Cachoeirinha, com ambiente tranquilo e acolhedor, pronta para receber você com todo conforto.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lazuli/10">
                <item.icon className="w-6 h-6 text-lazuli" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
