import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const WHATSAPP_URL = "https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ambiente tranquilo do Espaço Lazuli"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lazuli-dark/70 via-lazuli-dark/50 to-lazuli-dark/80" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-accent text-gold-light text-xl md:text-2xl mb-4"
        >
          Cuidado, equilíbrio e transformação
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-5 leading-tight"
        >
          Espaço Lazuli
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-base md:text-lg text-cream-dark font-light max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Seu refúgio terapêutico em Cachoeirinha.
          <br className="hidden md:block" />
          Massoterapia, estética e terapias integrativas com atendimento humanizado.
        </motion.p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-green hover:bg-green-light text-primary-foreground font-body font-semibold text-base tracking-wide px-8 py-4 rounded-full transition-colors duration-300 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Agende sua sessão
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#sobre" className="block">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-gold-light/60 mx-auto mb-2" />
          <p className="font-body text-xs text-gold-light/70 tracking-widest uppercase">Descubra</p>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
