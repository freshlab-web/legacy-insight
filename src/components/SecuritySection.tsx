import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <Lock className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Sua senha master continua com você.
          </motion.h2>

          <motion.p 
            className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Utilizamos apenas acesso de <strong className="text-foreground">Operador Visualizador</strong> para agendar pagamentos e 
            conciliar contas. Quem dá o "OK" final no boleto é sempre você. Risco zero de transações 
            não autorizadas.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
