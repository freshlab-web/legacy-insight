import { motion } from "framer-motion";

const AlertBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stat */}
          <motion.div 
            className="bg-dark-section rounded-2xl p-8 md:p-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className="text-6xl md:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              95%
            </motion.div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              das empresas brasileiras pagam mais impostos do que deveriam por erros técnicos ou falta de planejamento.
            </p>
            <a 
              href="https://ibpt.org.br/levantamento-do-ibpt-mostra-que-95-das-organizacoes-brasileiras-pagam-mais-impostos-do-que-deveriam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary text-sm mt-4 inline-block underline hover:text-primary/80"
            >
              Fonte: LEVANTAMENTO IBPT
            </a>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              O "Ralo Financeiro" que destrói sua margem.
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Vendas sólidas e ainda assim no relatório não é o mesmo que lucro. 
              Você sabe exatamente quanto opera em cada canal? Tem como saber o custo de margem 
              financeira considerando o DIFAL, impostos e taxas. Não saber torna esta perda potencial.
            </p>

            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ANALISAR MINHA SITUAÇÃO FINANCEIRA
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlertBanner;
