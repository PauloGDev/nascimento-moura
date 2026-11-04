import { defaultBrand } from "./brand.config";

export const appConfig = {
  name: "Nascimento Moura Advogados Associados",
  description: "Análise e revisão de contratos bancários para pessoas e empresas.",
  brand: defaultBrand,
  features: { catalog: false, account: false, admin: false },
  navigation: [
    { label: "Início", to: "#inicio" },
    { label: "Atuação", to: "#atuacao" },
    { label: "Como funciona", to: "#processo" },
    { label: "O escritório", to: "#escritorio" },
    { label: "Dúvidas", to: "#faq" },
  ],
};
