# 🧪 Desafio Técnico: Garantia de Qualidade (QA)

Este repositório contém a suíte de testes desenvolvida para avaliar a qualidade e a segurança de duas aplicações distintas: uma plataforma web de e-commerce e uma API Restful de gerenciamento de reservas.

## 🛠️ Tecnologias e Ferramentas Utilizadas

- Cypress
- Javascript
- Node.js
- Postman
- Git

---

## 🎯 Aplicações Testadas

### Teste 1: Interface Web (SauceDemo)

- **URL Alvo:** (https://saucedemo.com)
- **Escopo:** Automação de fluxos críticos de usuário na interface, incluindo autenticação com diferentes perfis e validação do fluxo do carrinho de compras utilizando Cypress.

### Teste 2: API REST (Restful-Booker)

- **URL Alvo:** (https://restful-booker.herokuapp.com)
- **Escopo:** Validação completa do ciclo de vida de uma reserva (CRUD) e testes de restrição de segurança (erros 400 e 403).

---

## 🚀 Como Executar os Testes do Cypress (Web)

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org).

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com
   cd seu-repositorio
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Abrir a Interface Gráfica do Cypress (Modo Interativo):**

   ```bash
   npx cypress open
   ```

   _Após abrir a tela do Cypress, selecione **E2E Testing**, escolha o navegador de sua preferência e clique no arquivo de teste desejado para assistir à execução em tempo real._

4. **Executar em Modo Headless (Via Terminal):**
   ```bash
   npx cypress run
   ```

---

## 📬 Como Importar e Rodar os Testes no Postman (API)

Os arquivos de configuração da API estão localizados na pasta `/test_Restful-booker/collections_json` deste repositório:

- `test_restful-booker.postman_collection.json` (Suíte de requisições)
- `base_url.postman_environment.json` (Variáveis de ambiente)

### Passo a Passo para Importação

1. Abra o seu aplicativo **Postman** (Desktop ou Web).
2. No canto superior esquerdo, clique no botão **Import**.
3. Arraste ou selecione os dois arquivos JSON mencionados acima de uma só vez.
4. Confirme a importação.

### Configurando o Ambiente (Environment)

1. No canto superior direito do Postman, clique no menu suspenso de ambientes (onde geralmente diz _No Environment_).
2. Selecione o ambiente importado (ex: `Restful-Booker-Env`).
3. Certifique-se de que a variável `base_url` está apontando para `https://restful-booker.herokuapp.com`.

### Executando o Fluxo de API

O fluxo foi estruturado para respeitar a seguinte ordem lógica:

1.  **POST /auth:** Gera o token de acesso dinamicamente.
2.  **POST /booking:** Cria uma nova reserva.
3.  **GET /booking/:id:** Valida a existência da reserva criada.
4.  **PUT /booking/:id:** Atualiza os dados da reserva (ajustado para enviar os dados diretamente na raiz do JSON e autenticação via `Cookie: token={{auth_token}}`).
5.  **DELETE /booking/:id:** Remove a reserva e valida o status `201 Created` específico da API.
6.  **Cenários Negativos:** Testes de validação de segurança para garantir retornos `403 Forbidden` quando o token for omitido e `400 Bad Request` para payloads corrompidos.

---

## 📈 Conclusão do Desafio

A execução das suítes de testes atingiu os objetivos propostos de validação de qualidade:

- **UI (Cypress):** Garantiu que a compra e as barreiras de login da SauceDemo funcionam sem quebras visuais ou de lógica de código.
- **API (Postman):** Superou as particularidades de arquitetura da API Restful-Booker (como o uso de autenticação via Cookie estruturada na tabela de _Headers_), protegendo o fluxo de dados ponta a ponta (CRUD) contra payloads inválidos ou acessos não autorizados.
