# 🐦 Twitter Fake - Feed Interativo

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</p>

## 📌 Sobre o Projeto

O **Twitter Fake** é uma aplicação web que simula o feed dinâmico de uma rede social. O grande objetivo deste projeto foi aplicar de forma prática conceitos fundamentais de **imutabilidade**, reatividade e componentização avançada no ecossistema do React.

A aplicação renderiza uma lista dinâmica de publicações vindas de uma estrutura de dados e gerencia de forma isolada e performática as interações de cada post, permitindo que o usuário envie novos comentários, delete suas mensagens e curta (aplauda) as interações de forma independente.

---

## 🛠️ Tecnologias e Ferramentas

- **React.js** (Componentização estruturada)
- **JavaScript (ES6+)**
- **Tailwind CSS** (Estilização utilitária moderna com transições fluidas)
- **Phosphor Icons** (Pacote de ícones interativos)
- **Date-fns** (Formatação e cálculo de datas relativas em tempo real)

---

## ⚙️ Funcionalidades e Engenharia do Código

O projeto conta com mecânicas sofisticadas de interatividade baseadas nas melhores práticas de mercado:

### 1. Feed Dinâmico e Estruturado
Os posts são iterados a partir de um array de objetos complexos contendo informações de autor, múltiplos tipos de conteúdo (como parágrafos e links externos) e metadados de data. A renderização utiliza chaves únicas (`key`) para otimizar o algoritmo de reconciliação do React.

### 2. Fluxo de Comentários e Imutabilidade
Dentro de cada componente de post, o estado de comentários é gerenciado de forma reativa:
- **Criação:** Envio de novos feedbacks respeitando a imutabilidade do React através do operador *spread* (`[...comments, newComment]`).
- **Deleção por Filtro:** Sistema de exclusão que cria um novo array sem o elemento deletado utilizando o método `.filter()`, enviando essa ação via propriedades (`props`) para o componente filho.

### 3. Microinterações e UX Avançada
- **Estado de Foco Inteligente:** O botão de envio e o rodapé do formulário ganham vida dinamicamente usando seletores focados do Tailwind CSS (`group-focus-within`), ocultando elementos desnecessários da tela até que o usuário decida interagir.
- **Validação Nativa:** Uso de estados de validação customizados com `setCustomValidity` para exibir mensagens de obrigatoriedade amigáveis ao usuário.
- **Botão Condicional:** O botão de envio é desabilitado automaticamente caso o campo de texto esteja vazio, evitando interações inválidas.

### 4. Isolamento de Estado (Likes)
Cada comentário renderizado possui o seu próprio escopo interno de curtidas (`likeCount`). Isso garante que, ao clicar em "Aplaudir", apenas o respectivo comentário sofra mutação e seja atualizado na tela, evitando re-renderizações desnecessárias em cascata.
