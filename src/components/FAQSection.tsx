import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a segurança dos dados?",
    answer:
      "Utilizamos protocolos de segurança de nível bancário e nossos servidores utilizam criptografia SHA256, a mesma utilizada pela Receita Federal para garantir o sigilo e proteção da nossa própria empresa.",
  },
  {
    question: "A BPO Legacy segue as normas da LGPD?",
    answer:
      "Sim. Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD), garantindo o sigilo e proteção de todos os documentos financeiros e contábeis da sua empresa.",
  },
  {
    question: "Vou precisar trocar de banco?",
    answer:
      "Não. O BPO OMIE integra seu ERP perfeitamente com seu banco via API mesmo após anos.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title text-foreground">Dúvidas Frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
