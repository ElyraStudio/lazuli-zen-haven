import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5551980395642?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20no%20Espaço%20Lazuli.";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔥 CONTROLAR SCROLL (esconde/desce)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // descendo
      } else {
        setShow(true); // subindo
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white border-b border-black/5"
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Espaço Lazuli" className="w-6 h-6" />
          <span className="text-black font-heading text-lg tracking-wide">
            Espaço Lazuli
          </span>
        </div>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70 font-body">
          <a href="#inicio" className="hover:text-black transition">Início</a>
          <a href="#sobre" className="hover:text-black transition">Sobre</a>
          <a href="#servicos" className="hover:text-black transition">Serviços</a>
          <a href="#contato" className="hover:text-black transition">Contato</a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-green px-4 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
          >
            <MessageCircle size={16} />
            Agendar
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
         className="md:hidden flex flex-col justify-center items-center gap-[4px] px-5"
        >
          {!open ? (
            <>
              <span className="w-6 h-[2px] bg-[#464184]" />
              <span className="w-6 h-[2px] bg-[#257d70]" />
              <span className="w-6 h-[2px] bg-[#cb794b]" />
            </>
          ) : (
            <X className="text-black" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full backdrop-blur-xl bg-white/80 border-t border-black/5"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-black font-body">

              <a href="#inicio" onClick={() => setOpen(false)} className="text-lg">
                Início
              </a>

              <a href="#sobre" onClick={() => setOpen(false)} className="text-lg">
                Sobre
              </a>

              <a href="#servicos" onClick={() => setOpen(false)} className="text-lg">
                Serviços
              </a>

              <a href="#contato" onClick={() => setOpen(false)} className="text-lg">
                Contato
              </a>

              <div className="w-16 h-[1px] bg-black/10" />

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green px-6 py-3 rounded-full text-white font-semibold shadow-md"
              >
                <MessageCircle size={18} />
                Agendar pelo WhatsApp
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;