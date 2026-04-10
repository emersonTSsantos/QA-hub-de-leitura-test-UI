# 📚 QA Automation Project | Hub de Leitura (UI Tests)

Automação de testes end-to-end (E2E) desenvolvida para validar os principais fluxos da aplicação Hub de Leitura Integrado, utilizando práticas consolidadas de mercado como Page Object Model (POM), arquitetura escalável e cenários orientados ao comportamento do usuário.

---

## 🔗 Links do Projeto

- 🔸 Aplicação testada:  
https://github.com/EBAC-QE/hub-de-leitura-integrado

- 🔸 Projeto de automação:  
https://github.com/emersonTSsantos/QA-hub-de-leitura-test-UI

---

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo assegurar a qualidade da aplicação por meio da automação de testes de interface, garantindo a validação contínua dos fluxos críticos e a prevenção de regressões.

A solução foi construída com foco em:

- Simulação do comportamento real do usuário (User-Centric Testing)
- Validação de regras de negócio
- Aumento da confiabilidade e estabilidade da aplicação
- Estrutura reutilizável e escalável
- Aderência às boas práticas de automação de testes

---

## 🧠 Abordagem de Testes

A estratégia de testes adotada contempla:

- Testes E2E focados nos principais fluxos da aplicação
- Separação de responsabilidades utilizando Page Object Model (POM)
- Uso de dados dinâmicos para evitar conflitos entre execuções
- Cenários positivos e negativos
- Organização dos testes visando manutenibilidade e legibilidade

---

## 🛠️ Stack Tecnológica

- **Cypress** → Automação de testes E2E
- **JavaScript** → Linguagem principal
- **Node.js** → Ambiente de execução
- **Fake Data (Faker.js)** → Geração de dados dinâmicos para testes
- **Git & GitHub** → Versionamento

---

## 📦 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js (v16 ou superior)
- npm
- Git

Verifique com:

- node -v

- npm -v

- git --version

---

# 🚀 Setup Completo do Ambiente

## ⚠️ IMPORTANTE: A aplicação precisa estar rodando antes da execução dos testes.


## 🔹 1. Clonar o projeto da aplicação (SUT - System Under Test)

git clone https://github.com/EBAC-QE/hub-de-leitura-integrado.git

---
## 🔹 2. Acessar a pasta

cd hub-de-leitura-integrado

---
## 🔹 3. Instalar dependências

npm install

---

## 🔹 4. Executar a aplicação

npm start

---

## 📍 A aplicação estará disponível em:

http://localhost:3000/index.html

---
# 🧪 Execução dos Testes Automatizados

## 🔹 1. Clonar o projeto de automação

Abra um novo terminal e insira: 

git clone https://github.com/emersonTSsantos/QA-hub-de-leitura-test-UI.git

---

## 🔹 2. Acessar o diretório

cd QA-hub-de-leitura-test-UI

---

## 🔹 3. Instalar dependências

npm install

---

# ▶️ Execução dos testes

## 🖥️ Modo interativo (recomendado)

npx cypress open

--- 

🔹Escolha o navegador
🔹Execute os testes individualmente
🔹Ideal para análise e debug

--- 


