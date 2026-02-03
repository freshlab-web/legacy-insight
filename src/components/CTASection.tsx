import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-gray">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Retome o controle do seu sonho!
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Deixe a burocracia e o risco fiscal com quem respira controladoria financeira. 
            Volte a ser o estrategista que o seu negócio precisa.
          </motion.p>

          <motion.a 
            href="#contato" 
            className="btn-primary inline-block text-lg px-10 py-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            QUERO UMA GESTÃO DE ELITE AGORA
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
