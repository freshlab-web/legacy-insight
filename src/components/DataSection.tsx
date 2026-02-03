import { motion } from "framer-motion";
import { Clock, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15h",
    label: "perdidas por semana pelo dono em burocracia financeira.",
    ctaText: "Fonte: Accountancy Age Study",
    ctaLink: "https://accountancyage.com/2020/01/16/micro-businesses-spend-15-hours-a-day-on-financial-admin/",
  },
  {
    icon: TrendingDown,
    value: "5%",
    label: "do faturamento anual perdido em erros, fraudes ou multas.",
    ctaText: "Fonte: ACFE - Report to the Nations",
    ctaLink: "https://www.anchin.com/wp-content/uploads/2024/08/2024-ACFE-Occupational-Fraud-Report.pdf",
  },
];

const DataSection = () => {
  return (
    <section className="py-16 md:py-20 bg-dark-section">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 md:p-10 text-center border border-white/10"
            >
              <motion.div 
                className="text-6xl md:text-7xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-white/80 text-base mb-4">{stat.label}</p>
              <a 
                href={stat.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm underline hover:text-primary/80"
              >
                {stat.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSection;
