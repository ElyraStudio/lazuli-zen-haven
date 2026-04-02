import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import facialImg from "@/assets/facial.jpg";
import reikiImg from "@/assets/reiki.jpg";
import massageImg from "@/assets/massage.jpg";
import handsImg from "@/assets/hands-feet.jpg";

const WHATSAPP_URL = "https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const services = [
  {
    title: "Estética Facial",
    tagline: "Rejuvenescimento & Autoestima",
    description:
      "Revitalize, hidrate e rejuvenesça sua pele com protocolos personalizados. Tratamentos que devolvem luminosidade, firmeza e autoestima.",
    image: facialImg,
    alt: "Tratamento de estética facial",
    colorClass: "bg-orange",
    borderClass: "border-orange/30",
  },
  {
    title: "Massoterapia",
    tagline: "Alívio de Dores & Tensões",
    description:
      "Massagem clínica e relaxante com técnicas precisas. Alívio de dores, tensões e cansaço acumulado — renovação completa do corpo.",
    image: massageImg,
    alt: "Sessão de massoterapia",
    colorClass: "bg-green",
    borderClass: "border-green/30",
  },
  {
    title: "Terapias Integrativas",
    tagline: "Equilíbrio Emocional & Energético",
    description:
      "Reiki, terapias energéticas e práticas integrativas que reconectam corpo, mente e energia. Um encontro com sua essência.",
    image: reikiImg,
    alt: "Terapia integrativa e Reiki",
    colorClass: "bg-marsala",
    borderClass: "border-marsala/30",
  },
  {
    title: "Mãos & Pés",
    tagline: "Relaxamento & Cuidado Completo",
    description:
      "Hidratação profunda, esfoliação suave e um toque relaxante que transforma cada detalhe. Cuidado feito com carinho.",
    image: handsImg,
    alt: "Cuidados com mãos e pés",
    colorClass: "bg-primary",
    borderClass: "border-primary/30",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-28 bg-secondary">
      <div className="container max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-accent text-accent text-lg md:text-xl mb-3">
            O que oferecemos
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-lg mx-auto leading-relaxed">
            Cada tratamento é uma experiência de cuidado integral — corpo, mente e alma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden bg-background border ${service.borderClass} shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  width={640}
                  height={480}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 ${service.colorClass} text-primary-foreground font-body text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full`}>
                  {service.tagline}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green font-body font-semibold text-sm hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar este serviço
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
