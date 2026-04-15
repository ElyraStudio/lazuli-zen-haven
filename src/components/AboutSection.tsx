import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import elaImg from "@/assets/ela.jpg";

const AboutSection = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="sobre"
      className="w-full py-20 px-5 bg-gradient-to-b from-[#f9f9f9] to-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-heading text-black mb-6 text-center">
          Sobre o Espaço Lazuli
        </h2>

        {/* FOTO */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[4/5]">
              <img
                src={elaImg}
                alt="Profissional do Espaço Lazuli"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* overlay suave pra dar profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* INTRO CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6 border border-black/5">
          <p className="text-black/70 text-base md:text-lg leading-relaxed text-center">
            À frente do Espaço Lazuli está Camila Vargas. Massoterapeuta Naturopata,  unindo Massoterapia à Estética Natural e as Terapias Integrativas, seu trabalho promove equilíbrio à todas as dimensões do ser humano: físico, mental, emocional e espiritual, proporcionando saúde, beleza e bem-estar aos seus pacientes
          </p>
        </div>

        {/* BOTÃO */}
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-semibold text-[#464184] hover:underline mb-6"
          >
            {expanded ? "Ver menos" : "Ler mais"}
          </button>
        </div>

        {/* CONTEÚDO */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-5"
            >

              {/* CAMILA */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                <h3 className="text-lg font-semibold text-[#464184] mb-2">
                  Profissional responsável
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Especialista em uma visão holística do corpo, Camila acredita que
                  saúde e beleza são reflexos de um organismo em harmonia. Seus
                  atendimentos são personalizados, respeitando a fisiologia de cada
                  cliente, utilizando o toque como ferramenta de reabilitação e
                  equilíbrio.
                </p>
              </div>

              {/* ESPAÇO */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                <h3 className="text-lg font-semibold text-[#257d70] mb-2">
                  Um refúgio terapêutico
                </h3>
                <p className="text-black/70 leading-relaxed">
                  O Espaço Lazuli foi planejado para ser mais do que um consultório.
                  É um ambiente de acolhimento, cura e conexão, onde cada detalhe
                  reflete uma abordagem integrativa e humanizada.
                </p>
              </div>

              {/* VIVÊNCIAS */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                <h3 className="text-lg font-semibold text-[#cb794b] mb-3">
                  Vivências e práticas
                </h3>

                <ul className="space-y-3 text-black/70">
                  <li>
                    <strong>Colaboração profissional:</strong> espaço disponível para
                    outros especialistas realizarem seus atendimentos de forma independente.
                  </li>
                </ul>
              </div>

              {/* FECHAMENTO */}
              <div className="bg-[#464184]/5 rounded-2xl p-6 border border-[#464184]/10">
                <p className="text-black/80 leading-relaxed text-center">
                  No Espaço Lazuli, o atendimento individual se une ao cuidado humanizado
                  para criar uma experiência completa de bem-estar, onde físico, mental,
                  emocional e espiritual encontram equilíbrio.
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;