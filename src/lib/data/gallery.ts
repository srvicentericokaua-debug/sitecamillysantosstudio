export type GalleryItem = {
  id: string;
  src: string | null;
  video?: string;
  alt: string;
};

// Fotos e vídeos reais fornecidos pela Camilly. Os espaços com "src: null"
// ficam como placeholders — substitua por "/images/seu-arquivo.jpg" quando
// houver mais fotos reais de trabalhos para adicionar.
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/detalhe-sobrancelhas.png",
    video: "/videos/detalhe-sobrancelhas.mp4",
    alt: "Detalhe de sobrancelhas trabalhadas no Studio",
  },
  {
    id: "g2",
    src: "/images/resultado-portfolio.png",
    video: "/videos/resultado-portfolio.mp4",
    alt: "Resultado de trabalho realizado por Camilly Santos",
  },
  {
    id: "g3",
    src: "/images/procedimento-atendimento.png",
    video: "/videos/procedimento-atendimento.mp4",
    alt: "Procedimento de sobrancelhas em atendimento",
  },
  {
    id: "g4",
    src: "/images/secao-experiencia.png",
    video: "/videos/secao-experiencia.mp4",
    alt: "Atendimento no Camilly Santos Studio",
  },
  { id: "g5", src: null, alt: "Adicionar foto de trabalho" },
  { id: "g6", src: null, alt: "Adicionar foto de trabalho" },
];
