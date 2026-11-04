import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "../../assets/nascimento-moura-logo-optimized.png";
import { templateConfig as site } from "../../config/template.config";

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="footer-brand-logo" src={logo} width="1000" height="357" alt={"Logo de " + site.displayName} />
          <p>Clareza jurídica para decisões mais seguras.</p>
          <strong>{site.professional.oab}</strong>
        </div>
        <div className="footer-nav">
          <b>NAVEGAÇÃO</b>
          <a href="#atuacao">Áreas atendidas</a>
          <a href="#processo">Como funciona</a>
          <a href="#escritorio">O escritório</a>
          <a href="#faq">Dúvidas frequentes</a>
        </div>
        <address className="footer-contact">
          <b>CONTATO</b>
          <a href={"mailto:" + site.contact.email}><Mail aria-hidden="true" />{site.contact.email}</a>
          <a href={site.contact.instagram} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" />{site.contact.instagramLabel}</a>
          <span><MapPin aria-hidden="true" />{site.location.address}</span>
        </address>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.displayName}.</span>
        <span>Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos.</span>
      </div>
      <a className="developed-by" href="https://somos4juris.com.br/" target="_blank" rel="noopener noreferrer">Desenvolvido por 4Juris</a>
    </footer>
  );
}
