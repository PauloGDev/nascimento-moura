import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  FileCheck2,
  Globe2,
  Instagram,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";
import heroImage from "../../../assets/contract-concern.webp";
import analysisImage from "../../../assets/bills-analysis.webp";
import planningImage from "../../../assets/financial-planning.webp";
import doctorOffice from "../../../assets/dr-lucas-office.webp";
import doctorCasual from "../../../assets/dr-lucas-casual.webp";
import doctorFormal from "../../../assets/dr-lucas-formal.webp";
import { templateConfig as site, whatsappUrl } from "../../../config/template.config";

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className={"section-intro" + (light ? " section-intro-light" : "")}>
      <div className="section-intro-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}

function WhatsAppButton({ children, inverse = false }) {
  return (
    <a
      className={"primary-button" + (inverse ? " primary-button-inverse" : "")}
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export function HomePage() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.location.mapsQuery);

  return (
    <>
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{site.hero.eyebrow}</span>
            <h1>{site.hero.title}</h1>
            <p className="hero-description">{site.hero.description}</p>
            <div className="hero-actions">
              <WhatsAppButton>{site.hero.cta}</WhatsAppButton>
              <span className="hero-note"><ShieldCheck aria-hidden="true" />{site.hero.note}</span>
            </div>
            <div className="hero-trust" aria-label="Compromissos do atendimento">
              <span><Check aria-hidden="true" />Análise individual</span>
              <span><Check aria-hidden="true" />Linguagem clara</span>
              <span><Check aria-hidden="true" />Sem promessa de resultado</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={heroImage}
              width="1200"
              height="1797"
              alt="Pessoa analisando uma cobrança bancária em casa"
              loading="eager"
              decoding="async"
            />
            <div className="hero-seal">
              <Scale aria-hidden="true" />
              <span>Entenda antes<br />de decidir</span>
            </div>
          </div>
        </div>
        <div className="contract-strip" aria-label="Tipos de contratos atendidos">
          <div className="contract-track">
            {[...site.contractTypes, ...site.contractTypes].map((item, index) => (
              <span key={item + index}>{item}<i aria-hidden="true" /></span>
            ))}
          </div>
        </div>
      </section>

      <section className="section pain-section" id="situacoes">
        <div className="container">
          <SectionIntro
            eyebrow="Isso parece familiar?"
            title="Talvez você esteja passando por isso agora"
            text="Problemas com contratos bancários raramente começam de uma hora para outra. Muitas vezes, a dúvida cresce junto com as parcelas."
          />
          <div className="pain-layout">
            <div className="pain-image">
              <img src={analysisImage} width="1800" height="1200" alt="Pessoas conferindo documentos e cálculos financeiros" loading="eager" decoding="async" />
              <span>Clareza começa com uma leitura cuidadosa do contrato.</span>
            </div>
            <div className="pain-list">
              {site.painPoints.map((point, index) => (
                <article key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="clarity-callout">
            <p>Se você se reconheceu em algum desses pontos, a primeira coisa que precisa não é uma promessa.</p>
            <strong>É clareza sobre a sua situação.</strong>
            <WhatsAppButton inverse>Quero entender minha dívida</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="belief-section">
        <div className="container belief-grid">
          <div>
            <span className="eyebrow">Entender não é contestar por contestar</span>
            <h2>Você não precisa dominar matemática financeira para fazer as perguntas certas.</h2>
          </div>
          <div className="belief-copy">
            <p>Contratos bancários usam linguagem técnica e cálculos que nem sempre ficam claros no momento da assinatura. Depois, mudanças de renda e renegociações podem tornar ainda mais difícil saber quanto da dívida original permanece.</p>
            <p>Buscar orientação é uma forma de compreender o que está sendo pago e quais decisões fazem sentido para a sua realidade.</p>
            <blockquote>“Pagar em dia não significa abrir mão de entender o que está escrito no contrato.”</blockquote>
          </div>
        </div>
      </section>

      <section className="section services-section" id="atuacao">
        <div className="container">
          <SectionIntro
            eyebrow="Atuação"
            title="Análise jurídica para diferentes tipos de crédito"
            text="Cada contrato tem regras, cálculos e riscos próprios. Por isso, a avaliação começa sempre pelos documentos e pelo contexto do cliente."
          />
          <div className="services-grid">
            {site.services.map((service, index) => (
              <article className={index === 0 ? "service-card service-card-featured" : "service-card"} key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contato">Conversar sobre este tema <ArrowRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="container">
          <SectionIntro
            eyebrow="Como funciona"
            title="Do primeiro contato à decisão, você sabe o que acontece"
            text="Um processo de atendimento organizado para transformar documentos e números em informações que você consegue avaliar."
            light
          />
          <ol className="process-list">
            {site.process.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="process-footer">
            <p>Buscar orientação não significa entrar com um processo. Significa entender sua situação antes de decidir.</p>
            <WhatsAppButton>Quero começar minha análise</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <SectionIntro
            eyebrow="O que você ganha"
            title="Mais do que discutir números: voltar a ter controle"
            text="A análise técnica ajuda a organizar a informação, dimensionar riscos e escolher os próximos passos com mais tranquilidade."
          />
          <div className="benefits-layout">
            <div className="benefit-image">
              <img src={planningImage} width="1200" height="1800" alt="Pessoa guardando dinheiro em um cofre doméstico" loading="eager" decoding="async" />
              <div className="benefit-image-caption">
                <FileCheck2 aria-hidden="true" />
                <span>Contrato, cálculos e contexto analisados em conjunto.</span>
              </div>
            </div>
            <div className="benefit-cards">
              {site.benefits.map((benefit, index) => (
                <article key={benefit.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="privacy-panel">
            <div className="privacy-heading">
              <LockKeyhole aria-hidden="true" />
              <div><span className="eyebrow">Sigilo e proteção de dados</span><h3>Seus documentos merecem cuidado</h3></div>
            </div>
            <ul>
              {site.privacy.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section" id="escritorio">
        <div className="container about-grid">
          <div className="about-visual">
            <figure className="about-photo-primary">
              <img src={doctorOffice} width="1200" height="1800" alt="Dr. Lucas Felipe do Nascimento Moura em ambiente profissional" loading="eager" decoding="async" />
              <figcaption>Atuação técnica, próxima e individual.</figcaption>
            </figure>
            <figure className="about-photo-secondary">
              <img src={doctorFormal} width="1200" height="1800" alt="Retrato profissional do Dr. Lucas Felipe do Nascimento Moura" loading="eager" decoding="async" />
            </figure>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Quem vai cuidar do seu caso</span>
            <h2>{site.professional.name}</h2>
            <strong>{site.professional.oab} · atuação em Direito Bancário</strong>
            <p>{site.professional.biography}</p>
            <div className="about-numbers">
              <span><b>{site.professional.experience}</b><small>Experiência informada pelo escritório</small></span>
              <span><b>{site.professional.volume}</b><small>Histórico informado pelo escritório</small></span>
              <span><b>Todo o Brasil</b><small>Atendimento on-line</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section objections-section">
        <div className="container">
          <SectionIntro
            eyebrow="Antes de decidir"
            title="Talvez você esteja pensando..."
            text="Dúvidas fazem parte do processo. O papel da análise é transformar receio em informação objetiva."
          />
          <div className="objections-grid">
            {site.objections.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-heading">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Informação clara desde o primeiro contato</h2>
            <p>Não encontrou sua dúvida? Fale com a equipe para receber uma orientação inicial sobre o seu caso.</p>
            <WhatsAppButton inverse>Tirar uma dúvida</WhatsAppButton>
          </div>
          <div className="faq-list">
            {site.faq.map((item, index) => (
              <details key={item.question}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true">+</i></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="container contact-card">
          <div className="contact-copy">
            <span className="eyebrow">O primeiro passo é uma conversa</span>
            <h2>Entenda o seu contrato antes de tomar a próxima decisão.</h2>
            <p>Conte brevemente o que está acontecendo. A equipe fará o contato inicial para orientar o envio dos documentos necessários.</p>
            <WhatsAppButton>Quero entender meu contrato</WhatsAppButton>
          </div>
          <div className="contact-photo">
            <img src={doctorCasual} width="1200" height="1800" alt="Dr. Lucas Felipe do Nascimento Moura" loading="eager" decoding="async" />
            <span>Atendimento direto e sem promessas fáceis.</span>
          </div>
          <div className="contact-details">
            <span><MessageCircle aria-hidden="true" /><span><small>WHATSAPP</small>{site.phoneLabel}</span></span>
            <a href={"mailto:" + site.contact.email}><Mail aria-hidden="true" /><span><small>E-MAIL</small>{site.contact.email}</span></a>
            <a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><small>ATENDIMENTO PRESENCIAL</small>{site.location.address}</span></a>
            <span><Globe2 aria-hidden="true" /><span><small>ABRANGÊNCIA</small>Atendimento on-line em todo o Brasil</span></span>
            <span><Clock3 aria-hidden="true" /><span><small>HORÁRIO</small>{site.location.hours}</span></span>
            <a href={site.contact.instagram} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /><span><small>INSTAGRAM</small>{site.contact.instagramLabel}</span></a>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
        <MessageCircle aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
