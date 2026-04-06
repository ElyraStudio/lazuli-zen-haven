import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const phone = "5551980395642";

const message = "Olá! Gostaria de agendar uma sessão no Espaço Lazuli.";

const WHATSAPP_URL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green hover:bg-green-light rounded-full flex items-center justify-center shadow-xl transition-colors duration-200"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppFloat;
