import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const DiagnosticForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    empresa: "",
    whatsapp: "",
    faturamento: "",
    erp: "",
    prazo: "",
  });

   const labels: Record<string, string> = {
    empresa: "",
    whatsapp: "",
    faturamento: "",
    erp: "",
    prazo: "",
  }

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const raw = Object.entries(formData).map(([key, value]) => `<br/><br/> <b>${labels[key] || key}</b>: ${value}`).join('<br/>')
        const mensagem = raw.replace(/^.*Mensagem:\s*/s, '').trim();

        try {
          const payload = {
            destinatario: "marcio@bpolegacy.com.br",
            assunto: "Diagnóstico - BPO Legacy",
            mensagem,
          };

          const response = await fetch('https://webdesign.freshlab.com.br/lp-mail/lp-mail.php', {
              method: 'POST', headers: { 'Content-Type': 'application/json', },
              body: JSON.stringify(payload),
            }
          );

          if (response.ok) {
            const text = await response.text();
            console.log("Success:", text);
            setIsSubmitted(true);
          } else {
            console.error("Error:", response.status);
          }
        } catch (error) {
          console.error("Network error:", error);
        }
      };


  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8" id="contato">
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">
        Agendar Diagnóstico
      </h3>
      
      {!isSubmitted ? (
         <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-foreground text-sm font-medium">
            Nome da Empresa
          </Label>
          <Input
            id="empresa"
            type="text"
            placeholder="Digite o nome da sua empresa"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-foreground text-sm font-medium">
            WhatsApp (com DDD)
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="faturamento" className="text-foreground text-sm font-medium">
            Faturamento Médio Mensal
          </Label>
          <Select
            value={formData.faturamento}
            onValueChange={(value) => setFormData({ ...formData, faturamento: value })}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione o faturamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50k-100k">R$ 50k a 100k</SelectItem>
              <SelectItem value="100k-500k">R$ 100k a 500k</SelectItem>
              <SelectItem value="acima-500k">Acima de 500k</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="erp" className="text-foreground text-sm font-medium">
            ERP Utilizado
          </Label>
          <Select
            value={formData.erp}
            onValueChange={(value) => setFormData({ ...formData, erp: value })}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione o ERP" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="omie">Omie</SelectItem>
              <SelectItem value="bling">Bling</SelectItem>
              <SelectItem value="conta-azul">Conta Azul</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="prazo" className="text-foreground text-sm font-medium">
            Prazo de Implementação
          </Label>
          <Select
            value={formData.prazo}
            onValueChange={(value) => setFormData({ ...formData, prazo: value })}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione o prazo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30-dias">Em até 30 dias</SelectItem>
              <SelectItem value="bimestre">Neste Bimestre</SelectItem>
              <SelectItem value="semestre">Neste Semestre</SelectItem>
              <SelectItem value="ano">Neste Ano</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button type="submit" className="btn-primary w-full text-base py-3.5 mt-2">
          QUERO PREVISIBILIDADE
        </button>
      </form>
      ) : (
        <div className="text-center py-8">
          <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">
            Obrigado!
          </h3>
          <p className="text-muted-foreground">
           Vamos entrar em contato em breve!
          </p>
        </div>
      )}
     
    </div>
  );
};

export default DiagnosticForm;
