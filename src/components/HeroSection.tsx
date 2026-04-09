import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const WHATSAPP_URL =
  "https://wa.me/5551980395642?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 scroll-mt-24" id="inicio">

      {/* BACKGROUND */}
      <div className="absolute inset-0 will-change-transform">

        {/* IMAGEM (sem scale pesada) */}
        <img
          src={heroImage}
          alt="Ambiente tranquilo do Espaço Lazuli"
          className="w-full h-full object-cover"
        />

        {/* GRADIENT (mantém o visual bonito) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e]/60 to-[#1a1a2e]/90" />

        {/* REMOVIDO: backdrop-blur (principal causa do lag) */}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto flex flex-col items-center">

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-accent text-gold-light text-lg md:text-xl mb-3 tracking-wide"
        >
          Cuidado, equilíbrio e transformação
        </motion.p>

        {/* TITLE */}
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight text-center"
>
  <span className="text-gold-light">Espaço</span>{" "}
  <span>Lazuli </span>
  <span className="text-gold-light">Estética Natural e Terapias Integrativas</span>
</motion.h1>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-gold-light to-transparent mb-6"
        />

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-sm md:text-base text-cream-dark font-light max-w-md mx-auto mb-8 leading-relaxed"
        >
          Seu refúgio terapêutico em Cachoeirinha.
          <br className="hidden md:block" />
          Massoterapia, estética e terapias integrativas com atendimento humanizado.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center gap-3 bg-green text-white font-body font-semibold text-base px-8 py-4 rounded-full shadow-lg transition"
        >
          {/* GLOW OTIMIZADO */}
          <span className="absolute inset-0 rounded-full bg-green opacity-20" />

          <span className="relative flex items-center gap-3">
            <MessageCircle className="w-5 h-5" />
            Agende sua sessão
          </span>
        </motion.a>
      </div>

      {/* SCROLL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <a href="#sobre" className="block">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-light/60 mx-auto mb-2" />
          <p className="text-xs text-gold-light/70 tracking-widest uppercase">
            Descubra
          </p>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;