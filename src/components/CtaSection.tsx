import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-28 bg-lazuli-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-marsala blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-3xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="font-accent text-gold-light text-xl md:text-2xl">
            Você merece esse momento
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Sinta a diferença no primeiro toque
          </h2>
          <p className="text-lazuli-light font-body font-light max-w-lg mx-auto leading-relaxed text-base md:text-lg">
            Reserve sua sessão no Espaço Lazuli e permita-se viver uma experiência 
            de cuidado, conforto e transformação.
          </p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-green hover:bg-green-light text-primary-foreground font-body font-semibold text-base tracking-wide px-10 py-4 rounded-full transition-colors duration-300 shadow-lg mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            Agende sua sessão
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
