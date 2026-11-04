import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/nascimento-moura-logo-optimized.png";
import { appConfig } from "../../config/app.config";
import { templateConfig as site, whatsappUrl } from "../../config/template.config";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={"Página inicial de " + site.displayName} onClick={close}>
          <img className="brand-logo" src={logo} width="1000" height="357" alt={"Logo de " + site.displayName} />
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="menu-principal" className={open ? "nav open" : "nav"} aria-label="Navegação principal">
          {appConfig.navigation.map((item) => (
            <a key={item.to} href={item.to} onClick={close}>{item.label}</a>
          ))}
          <a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={close}>
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
