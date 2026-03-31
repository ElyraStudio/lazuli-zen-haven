import { motion } from "framer-motion";
import facialImg from "@/assets/facial.jpg";
import reikiImg from "@/assets/reiki.jpg";
import massageImg from "@/assets/massage.jpg";
import handsImg from "@/assets/hands-feet.jpg";

const services = [
  {
    title: "Estética Facial",
    description:
      "Revitalize, hidrate e rejuvenesça sua pele com protocolos personalizados. Tratamentos que devolvem luminosidade, firmeza e autoestima — porque cuidar do rosto é celebrar quem você é.",
    image: facialImg,
    alt: "Tratamento facial no Espaço Lazuli",
  },
  {
    title: "Reiki & Terapias Energéticas",
    description:
      "Reconecte corpo, mente e energia. Nossas sessões de Reiki proporcionam alívio emocional, clareza mental e um profundo estado de paz interior — um encontro com sua essência.",
    image: reikiImg,
    alt: "Sessão de Reiki no Espaço Lazuli",
  },
  {
    title: "Massagem Terapêutica",
    description:
      "Alívio de dores, tensões e cansaço acumulado. Técnicas precisas de massagem relaxante e drenagem linfática que renovam seu corpo e devolvem leveza ao seu dia a dia.",
    image: massageImg,
    alt: "Massagem terapêutica no Espaço Lazuli",
  },
  {
    title: "Cuidados com Mãos & Pés",
    description:
      "Hidratação profunda, esfoliação suave e um toque relaxante que transforma cada detalhe. Mãos e pés merecem atenção — e aqui, cada gesto é feito com carinho.",
    image: handsImg,
    alt: "Cuidados com mãos e pés no Espaço Lazuli",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-4">
            O que oferecemos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-xl mx-auto leading-relaxed">
            Cada tratamento é uma experiência pensada para cuidar de você por inteiro — corpo, mente e alma.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-sm aspect-square">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-lazuli-dark/10" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-5">
                <div className="w-12 h-px bg-gold" />
                <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body font-light leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
