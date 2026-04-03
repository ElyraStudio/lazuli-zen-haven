import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import facialImg from "@/assets/facial.jpg";
import reikiImg from "@/assets/reiki.jpg";
import massageImg from "@/assets/massage.jpg";
import handsImg from "@/assets/hands-feet.jpg";

const WHATSAPP_URL =
  "https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

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
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl mx-auto px-5">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-accent text-accent text-base md:text-xl mb-2">
            O que oferecemos
          </p>

          <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground mb-3">
            Nossos Serviços
          </h2>

          <p className="text-muted-foreground font-body font-light max-w-md mx-auto text-sm md:text-base">
            Experiências de cuidado para corpo e mente.
          </p>
        </motion.div>

        {/* GRID 2x2 MOBILE */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelectedService(service)}
              className={`cursor-pointer rounded-xl overflow-hidden bg-background border ${service.borderClass} shadow-sm hover:shadow-md transition`}
            >
              {/* IMAGE */}
              <div className="relative h-28 md:h-48">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />

                <div
                  className={`absolute top-2 left-2 ${service.colorClass} text-white text-[10px] md:text-xs px-2 py-1 rounded-full`}
                >
                  {service.tagline}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3 md:p-6 space-y-2">
                <h3 className="font-heading text-sm md:text-xl font-semibold text-foreground leading-tight">
                  {service.title}
                </h3>

                <span className="text-xs text-primary font-semibold">
                  Ver mais
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-48">
                  <img
                    src={selectedService.image}
                    alt={selectedService.alt}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute top-3 left-3 ${selectedService.colorClass} text-white text-xs px-3 py-1 rounded-full`}
                  >
                    {selectedService.tagline}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {selectedService.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedService.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-green text-white py-3 rounded-full font-semibold hover:scale-105 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar pelo WhatsApp
                  </a>

                  {/* CLOSE */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full text-sm text-muted-foreground hover:text-black transition"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ServicesSection;