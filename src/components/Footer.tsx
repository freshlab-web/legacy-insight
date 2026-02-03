import logo from "@/assets/logo-bpo-legacy.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="section-container">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="BPO Legacy" className="h-10 w-auto" />
          <p className="text-foreground font-semibold text-base">
            GESTÃO FINANCEIRA 360°
          </p>
          <p className="text-muted-foreground text-sm">
            © 2025 BPO Legacy. Todos os direitos reservados. Curitiba/PR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
