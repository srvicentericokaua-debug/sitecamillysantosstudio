export type FaqItem = {
  question: string;
  answer: string;
};

// Estrutura inicial — respostas que dependem de regra interna do Studio estão
// marcadas com [A CONFIRMAR] e devem ser revisadas com a Camilly antes de publicar.
export const faqItems: FaqItem[] = [
  {
    question: "Como faço para agendar?",
    answer:
      "O agendamento é feito diretamente pelo WhatsApp do Studio. É só clicar em qualquer botão de agendar no site para iniciar a conversa.",
  },
  {
    question: "Como funciona a manutenção?",
    answer: "[A CONFIRMAR] Descreva aqui a periodicidade de manutenção recomendada pela Camilly.",
  },
  {
    question: "Quanto tempo dura o procedimento?",
    answer: "[A CONFIRMAR] Informe a duração média de cada procedimento.",
  },
  {
    question: "Existem cuidados antes do atendimento?",
    answer: "[A CONFIRMAR] Liste as recomendações antes do horário marcado.",
  },
  {
    question: "Como escolher o procedimento ideal para mim?",
    answer:
      "Cada olhar é único. Durante o atendimento, a Camilly avalia seu formato e sua rotina para indicar o procedimento mais adequado.",
  },
  {
    question: "Qual é a política para remarcações?",
    answer: "[A CONFIRMAR] Defina prazo e condições para remarcar um horário.",
  },
];
