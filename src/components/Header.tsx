import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-bpo-legacy.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0">
            <img src={logo} alt="BPO Legacy" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Right side text */}
          <span className="hidden md:block text-foreground text-sm">Parte do Group Legacy | Curitiba/PR</span>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <span className="text-foreground text-sm">
                Parte do Grupo Legacy | Curitiba/PR
              </span>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;