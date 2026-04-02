import { motion } from "framer-motion";
import { Heart, Users, Leaf, Star } from "lucide-react";

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    text: "Cada pessoa é única. Protocolos personalizados com acolhimento e empatia genuínos.",
  },
  {
    icon: Leaf,
    title: "Ambiente Terapêutico",
    text: "Um espaço pensado para a cura: aromas, sons e energia que convidam à reconexão.",
  },
  {
    icon: Users,
    title: "Espaço Colaborativo",
    text: "Profissionais integrados oferecendo yoga, meditação, constelação familiar e mais.",
  },
  {
    icon: Star,
    title: "Sagrado Feminino",
    text: "Vivências e círculos que celebram a força, a intuição e a cura da mulher.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5">
        {/* Camila intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-accent text-lg md:text-xl mb-3">Quem cuida de você</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Camila Vargas
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            Massoterapeuta Naturopata com <strong className="font-semibold text-foreground">8 anos de experiência</strong> na
            área da saúde. Sua abordagem holística e personalizada une massagem clínica,
            estética e terapias integrativas — utilizando o <em>toque como ferramenta de
            reabilitação, equilíbrio e bem-estar real</em>, respeitando a individualidade
            de cada cliente.
          </p>
        </motion.div>

        {/* Conceito */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center mb-16"
        >
          <p className="font-accent text-accent text-lg mb-2">O conceito</p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Um refúgio terapêutico
          </h3>
          <p className="text-muted-foreground font-body font-light max-w-xl mx-auto leading-relaxed">
            O Espaço Lazuli foi pensado para ser mais do que uma clínica — é um lugar
            de cura e conexão, onde o tempo desacelera e cada detalhe convida você
            a se reencontrar.
          </p>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
