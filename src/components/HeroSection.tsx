import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spa.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-b from-lazuli-dark/60 via-lazuli-dark/40 to-lazuli-dark/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Estética &bull; Bem-estar &bull; Equilíbrio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 leading-tight"
        >
          Espaço Lazuli
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-cream-dark font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Um refúgio de cuidado e transformação em Cachoeirinha.
          <br />
          Onde cada toque é pensado para despertar o melhor de você.
        </motion.p>

        <motion.a
          href="#servicos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-block bg-gold hover:bg-gold-light text-accent-foreground font-body font-medium text-sm tracking-widest uppercase px-10 py-4 rounded-sm transition-colors duration-300"
        >
          Conheça nossos serviços
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-light/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
