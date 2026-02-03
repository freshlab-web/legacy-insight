import { Check } from "lucide-react";
import DiagnosticForm from "./DiagnosticForm";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const checklist = ["Conciliação D-1 Diária", "Blindagem de DIFAL", "Transição Sem Traumas"];
  return <section id="inicio" className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Dark Overlay for brand consistency */}
      <div className="absolute inset-0 bg-dark-section/85" />
      
      {/* Content */}
      <div className="relative z-10 py-12 md:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="tag-badge-primary">Especialistas em Varejo, Atacado e Indústria</span>
                <span className="tag-badge-secondary">Tecnologia OMIE</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                Recupere o controle e a margem do seu varejo.
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Nós assumimos a controladoria financeira da sua empresa com a segurança do{" "}
                <strong className="text-white">Group Legacy</strong>. Você foca em vender e produzir, 
                nós garantimos que cada centavo de lucro fique no seu bolso.
              </p>

              {/* Checklist */}
              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                {checklist.map(item => <li key={item} className="flex items-center gap-2 text-white/90">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>)}
              </ul>
            </div>

            {/* Right - Form */}
            <div className="animate-slide-in-right" style={{
            animationDelay: "0.2s"
          }}>
              <DiagnosticForm />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;