export type Service = {
  slug: string;
  name: string;
  description: string;
  image: string;
  video?: string;
  duration?: string;
  price?: string;
  confirmed: boolean;
};

// Apenas o serviço de sobrancelhas foi confirmado no texto oficial da Camilly.
// Os demais itens ficam como estrutura pronta ("confirmed: false") — troque o
// nome, a descrição e a imagem quando os outros procedimentos forem confirmados.
export const services: Service[] = [
  {
    slug: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
    description:
      "Cuidado e técnica dedicados a valorizar o formato natural do seu olhar, com atenção a cada detalhe.",
    image: "/images/detalhe-sobrancelhas.png",
    video: "/videos/detalhe-sobrancelhas.mp4",
    confirmed: true,
  },
  {
    slug: "servico-a-confirmar-1",
    name: "Serviço a confirmar",
    description: "Adicione aqui o próximo procedimento oferecido pelo Studio.",
    image: "/images/detalhe-sobrancelhas.png",
    confirmed: false,
  },
  {
    slug: "servico-a-confirmar-2",
    name: "Serviço a confirmar",
    description: "Adicione aqui o próximo procedimento oferecido pelo Studio.",
    image: "/images/detalhe-sobrancelhas.png",
    confirmed: false,
  },
  {
    slug: "servico-a-confirmar-3",
    name: "Serviço a confirmar",
    description: "Adicione aqui o próximo procedimento oferecido pelo Studio.",
    image: "/images/detalhe-sobrancelhas.png",
    confirmed: false,
  },
];
