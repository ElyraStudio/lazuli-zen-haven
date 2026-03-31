import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-lazuli-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-lazuli-light blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-gold-light font-body text-sm tracking-[0.25em] uppercase">
            Agende agora
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-semibold text-primary-foreground leading-tight">
            Sinta a diferença no primeiro toque
          </h2>
          <p className="text-lazuli-light font-body font-light max-w-xl mx-auto leading-relaxed text-lg">
            Reserve sua sessão no Espaço Lazuli e permita-se viver uma experiência 
            de cuidado, conforto e transformação. Você merece esse momento.
          </p>
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gold hover:bg-gold-light text-accent-foreground font-body font-medium text-sm tracking-widest uppercase px-12 py-5 rounded-sm transition-colors duration-300 mt-4"
          >
            Agende sua sessão
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
