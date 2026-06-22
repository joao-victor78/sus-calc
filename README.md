# SUS Calc

Calculadora do questionário **System Usability Scale (SUS)** desenvolvida em React.

Este projeto implementa uma SPA que coleta respostas do SUS, calcula o escore final de cada respondente, exibe a interpretação qualitativa e mantém um histórico de avaliações com média geral.

---

## Funcionalidades implementadas

- Formulário com os 10 itens do SUS em escala Likert 1–5
- Validação que bloqueia submissão enquanto houver itens não respondidos
- Cálculo correto do escore SUS usando a fórmula oficial
- Exibição do resultado com classificação qualitativa e cor de fundo
- Histórico de respondentes com número sequencial, sistema avaliado, escore e classificação
- Cálculo e exibição da média geral dos escores
- Botão "Limpar Histórico" para reiniciar o painel
- Reset do formulário após cada submissão sem recarregar a página

## Tecnologias

- React 18
- Vite
- CSS puro

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

## Organização do projeto

- `src/App.jsx` — componente raiz que mantém o estado do histórico
- `src/components/SUSForm.jsx` — formulários e validação de respostas
- `src/components/ScoreCard.jsx` — exibição do escore e classificação
- `src/components/ScoreHistory.jsx` — lista de respondentes e média geral
- `src/data/susQuestions.js` — lista das questões do SUS
- `src/utils/calculateSUS.js` — cálculo do escore e interpretação qualitativa

## Observações

- Não há back-end: todo o funcionamento é feito no cliente usando React e hooks nativos.
- O projeto está pronto para ser enviado como repositório público.

## Discente

Nome: João Victor Alves da Mota
Matrícula: 2024.1.0120.0075-1