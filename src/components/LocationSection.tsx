import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551980395642?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-16 md:py-28 bg-background scroll-mt-24">
      <div className="container max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="font-accent text-accent text-lg md:text-xl mb-3">Venha nos visitar</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Localização
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Endereço</h4>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                  Rua Espírito Santo, 317 — 2º andar<br />
                  Bairro Parque Espírito Santo<br />
                  Cachoeirinha — RS
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Horários</h4>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                  Atendimento com hora marcada.<br />
                  Entre em contato para verificar disponibilidade.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green hover:bg-green-light text-primary-foreground font-body font-semibold text-base px-8 py-4 rounded-full transition-colors duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Fale conosco
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-md aspect-square md:aspect-[4/3]"
          >
            <iframe
              title="Localização Espaço Lazuli"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.5958109710898!2d-51.06990213034404!3d-29.910867135964303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197380d5883297%3A0xce4e797800cdb1!2sEspa%C3%A7o%20Lazuli%20%7C%20Reiki%20%7C%20Massagem%20em%20Gravata%C3%AD%20%7C%20Est%C3%A9tica%20%7C%20Massoterapeuta!5e0!3m2!1spt-BR!2sbr!4v1775176809332!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
