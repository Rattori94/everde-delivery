# everde

Delivery de comida 100% vegetal — aplicação React com listagem de restaurantes, cardápio, carrinho e checkout em três etapas.

O layout parte do projeto **efood** (Figma) disponibilizado pela EBAC.

## Funcionalidades

- Listagem de seis restaurantes com nota, tipo de cozinha e selo de destaque
- Página própria para cada restaurante (`/restaurante/:id`), com URL compartilhável e navegação pelo histórico do navegador
- Modal com a descrição completa do prato, porção e preço
- Carrinho lateral com adição, remoção item a item e cálculo do total
- Checkout em três etapas — entrega, pagamento e confirmação — com validação e máscaras
- Tratamento de restaurante inexistente, estados de carregamento e layout responsivo

## Stack

| Ferramenta | Papel |
| --- | --- |
| React 18 + TypeScript | Base da aplicação |
| Vite | Servidor de desenvolvimento e build |
| styled-components | Estilos com escopo e acesso à paleta em JS |
| Redux Toolkit | Estado do carrinho, compartilhado entre header, modal e sidebar |
| RTK Query | Camada de dados com cache e estados de carregamento |
| React Router | Rotas com URL própria por página |
| Formik + Yup | Formulários do checkout e validação condicional |
| react-input-mask | Máscaras de CEP, cartão, CVV e validade |

## Créditos

Layout baseado no projeto **efood**, usado como referência de estrutura, espaçamentos e tipografia. Marca, paleta, conteúdo e implementação são próprios.
