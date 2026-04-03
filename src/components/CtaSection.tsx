import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32 bg-lazuli-dark relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-marsala blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container max-w-3xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-7"
        >

          {/* TAG */}
          <p className="font-accent text-gold-light text-xl md:text-2xl tracking-wide">
            Seu momento começa agora
          </p>

          {/* HEADLINE */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Chega de carregar o cansaço no corpo.
            <br />
            <span className="text-gold-light">
              Você merece se sentir leve novamente.
            </span>
          </h2>

          {/* DESCRIÇÃO */}
          <p className="text-lazuli-light font-body font-light max-w-xl mx-auto leading-relaxed text-base md:text-lg">
            Cada sessão no Espaço Lazuli é pensada para aliviar tensões, 
            restaurar sua energia e devolver aquela sensação de bem-estar real.
            <br /><br />
            <span className="text-primary-foreground font-medium">
              Não é só estética — é cuidado de verdade.
            </span>
          </p>

          {/* CTA BUTTON */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-green hover:bg-green-light text-primary-foreground font-body font-semibold text-base md:text-lg tracking-wide px-12 py-5 rounded-full transition-all duration-300 shadow-xl mt-4 relative overflow-hidden"
          >
            {/* glow interno */}
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />

            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">
              Agendar pelo WhatsApp
            </span>
          </motion.a>

          {/* URGÊNCIA / MICRO COPY */}
          <p className="text-xs text-lazuli-light opacity-70 mt-2">
            Atendimentos com horário limitado • Resposta rápida pelo WhatsApp
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;