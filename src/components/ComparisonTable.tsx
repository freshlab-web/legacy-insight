import { Check } from "lucide-react";

const comparisons = [
  {
    diferencial: "Treinamento e Direção",
    interno: "Leva muito tempo treinando e corrigindo falhas.",
    bpo: "Plug & Play: Equipe pronta e experiente desde",
  },
  {
    diferencial: "Custo Mensal Real",
    interno: "R$ 6.000 a R$ 11.000 + encargos",
    bpo: "A partir de R$ 1.890 p/ mês",
  },
  {
    diferencial: "Tecnologia e Auditoria",
    interno: "Sistemas básicos ou planilhas.",
    bpo: "ERP OMIE + Dashboards de BI inclusos.",
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">
            BPO Legacy x Equipe Interna
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-foreground bg-muted/50 rounded-tl-lg">
                  Diferencial Estratégico
                </th>
                <th className="text-center py-4 px-6 font-semibold text-foreground bg-muted/50">
                  Equipe CLT Interna
                </th>
                <th className="text-center py-4 px-6 font-semibold text-white bg-primary rounded-tr-lg">
                  BPO Legacy (Sênior)
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={row.diferencial}
                  className="border-b border-border"
                >
                  <td className="py-5 px-6 font-medium text-foreground">
                    {row.diferencial}
                  </td>
                  <td className="py-5 px-6 text-center text-muted-foreground text-sm">
                    {row.interno}
                  </td>
                  <td className="py-5 px-6 text-center bg-primary/5">
                    <div className="flex items-start justify-center gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{row.bpo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
