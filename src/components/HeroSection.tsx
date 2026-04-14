import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import logo from "@/assets/logo.png";

const WHATSAPP_URL =
  "https://wa.me/5551980395642?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 scroll-mt-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ambiente do Espaço Lazuli"
          className="w-full h-full object-cover object-center md:object-[50%_35%]"
        />

        {/* overlay mais equilibrado (deixa a foto aparecer) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/55 via-[#0f172a]/60 to-[#0f172a]/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto flex flex-col items-center">

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-accent text-gold-light text-xl md:text-2xl mb-1"
        >
          Cuidado, equilíbrio e transformação
        </motion.p>

       
           {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 flex items-center justify-center"
        >
          <img
            src={logo}
            alt="Espaço Lazuli"
            className="w-65 md:w-96 object-contain"
            style={{
              filter: `
                drop-shadow(0 0 4px rgba(255,255,255,0.9))
                drop-shadow(0 0 6px rgba(255,255,255,0.6))
                drop-shadow(0 10px 40px rgba(0,0,0,0.8))
              `
            }}
          />
        </motion.div>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-base md:text-lg text-gold-light/90 font-medium mb-3"
        >
          Estética Natural e Terapias Integrativas
        </motion.p>

        {/* LINHA */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-gold-light to-transparent mb-4"
        />

        {/* TEXTO FINAL */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-sm md:text-base text-cream-dark font-light max-w-md mx-auto mb-6 leading-relaxed"
        >
          Seu refúgio terapêutico em Cachoeirinha. Massagem clínica e estética,
          tratamentos faciais e corporais e terapias integrativas com foco em
          atendimento humanizado.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center gap-3 bg-green text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg"
        >
          <span className="absolute inset-0 rounded-full bg-green opacity-20" />
          <span className="relative flex items-center gap-3">
            <MessageCircle className="w-5 h-5" />
            Agende sua sessão
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;