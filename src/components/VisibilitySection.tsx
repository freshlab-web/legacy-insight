import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Wallet, TrendingUp, X } from "lucide-react";

import dashboard1 from "@/assets/dashboard-1.png";
import dashboard2 from "@/assets/dashboard-2.png";
import dashboard3 from "@/assets/dashboard-3.png";
import dashboard4 from "@/assets/dashboard-4.png";

const benefits = [
  { 
    icon: LineChart, 
    title: "Dashboards em Tempo Real:", 
    text: "Acompanhe faturamento, margens e lucro detalhado através de viés de fit estratégico." 
  },
  { 
    icon: Wallet, 
    title: "Fluxo de Caixa Transparente:", 
    text: "Visualização total das entradas e saídas. Saiba exatamente quanto terá em caixa nos próximos 30, 60 ou 90 dias." 
  },
  { 
    icon: TrendingUp, 
    title: "Indicadores de Performance:", 
    text: "Monitoramos os KPIs essenciais para varejo, atacado e indústrias de alto faturamento." 
  },
];

const dashboardImages = [
  { src: dashboard1, alt: "Precificação e Simulador" },
  { src: dashboard2, alt: "Fluxo de Caixa" },
  { src: dashboard3, alt: "Curva ABC - Produtos" },
  { src: dashboard4, alt: "Categorias Omie" },
];

const VisibilitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="sobre" className="py-16 md:py-20 bg-dark-section">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Image Carousel */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Image Carousel */}
              <div 
                className="relative overflow-hidden rounded-lg bg-white cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={dashboardImages[activeIndex].src}
                    alt={dashboardImages[activeIndex].alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    Clique para ampliar
                  </span>
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {dashboardImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-primary w-6" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Visibilidade total do seu dinheiro.
            </h2>
            <p className="text-white/60 text-base">
              Para onde vai cada centavo? Com a BPO Legacy, você para de adivinhar e passa a gerir com dados. Entregamos o planejamento financeiro que seu resultado exige.
            </p>

            <ul className="space-y-5 pt-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={benefit.title} 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-white font-semibold">{benefit.title}</span>
                    <span className="text-white/60 text-sm"> {benefit.text}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                aria-label="Fechar"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={dashboardImages[activeIndex].src}
                alt={dashboardImages[activeIndex].alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />

              {/* Modal Dot Indicators */}
              <div className="flex justify-center gap-3 mt-4">
                {dashboardImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-primary w-8" 
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VisibilitySection;
