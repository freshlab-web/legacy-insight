import { motion } from "framer-motion";
import { Shield, BarChart3, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Blindagem de DIFAL",
    description: "Cálculo exato do preço de venda para cada estado brasileiro. Pare de perder precisão em vendas interestaduais e evite erros.",
  },
  {
    icon: BarChart3,
    title: "Gestão de Curva ABC",
    description: "Saiba exatamente em quais produtos pagar suas contas e quais estão apenas movimentando o seu capital de giro.",
  },
  {
    icon: RefreshCw,
    title: "Conciliação D-1",
    description: "Sincronização diária entre banco e sistema. De todos os lançamentos no radar e análise de todas as suas entradas.",
  },
];

const FeatureCards = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-section-alt">
      <div className="section-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">
            Inteligência técnica para quem vende alto.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/30"
            >
              <div className="feature-icon mb-5">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
