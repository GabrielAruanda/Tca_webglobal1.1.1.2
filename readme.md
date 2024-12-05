# Gerenciador de Encurtamento de URLs

Este projeto é uma aplicação web desenvolvida com Flask para gerenciar o encurtamento de URLs, monitorar acessos, exibir dados estatísticos e gerar relatórios. Ele utiliza tecnologias modernas para entregar uma interface funcional, intuitiva e eficiente.

---

## 🔍 Funcionalidades Principais

1. **Encurtamento de URLs:**
   - Converta URLs longas em links curtos únicos para facilitar o compartilhamento.
   - Todas as URLs geradas são armazenadas no banco de dados para monitoramento e gerenciamento futuros.

2. **Monitoramento de Cliques:**
   - Registra cada clique na URL encurtada.
   - Coleta dados como:
     - Data e hora do clique.
     - Endereço IP do usuário que acessou.
     - Número total de cliques acumulados.

3. **Listagem de URLs:**
   - Apresente uma lista detalhada de todas as URLs encurtadas com informações completas.

4. **Gráficos Interativos:**
   - Gere visualizações dinâmicas que mostram o desempenho das URLs em termos de cliques.

5. **Relatórios Personalizados:**
   - Exporte relatórios em formatos **PPTX**, **DOCX** ou **XLSX**, úteis para análise ou apresentação.

6. **Redirecionamento Automático:**
   - Os usuários que acessarem um link curto são redirecionados automaticamente para a URL original.

---

## 📜 Fluxo de Navegação no Projeto

### 1. **Página Inicial (`/`)**
   - Exibe um formulário simples onde o usuário insere a URL original para encurtar.
   - Após a criação, o sistema exibe o link curto gerado e permite copiá-lo.

### 2. **Redirecionamento (`/<short_code>`):**
   - Quando o usuário acessa um link curto, o sistema redireciona automaticamente para a URL original.
   - Nesse processo, os dados de monitoramento são atualizados, como:
     - Incremento na contagem de cliques.
     - Registro do horário e IP do acesso.

### 3. **Lista de URLs (`/urls`):**
   - Página dedicada para exibir todas as URLs encurtadas.
   - Mostra informações detalhadas, como:
     - Código curto gerado.
     - Data de criação.
     - Último clique (data e IP).
     - Total de cliques acumulados.

### 4. **Gráficos Interativos (`/charts`):**
   - Apresenta gráficos que ajudam a entender o desempenho das URLs.
   - Cada gráfico é atualizado dinamicamente, permitindo que o usuário visualize os dados mais recentes.

### 5. **Geração de Relatórios (`/download/<file_type>`):**
   - Página para baixar relatórios detalhados em diferentes formatos:
     - **PPTX**: Apresentação com gráficos e dados.
     - **DOCX**: Documento com descrição detalhada de cada URL.
     - **XLSX**: Planilha contendo as informações em formato tabular.
   - Os relatórios são úteis para análises e apresentações profissionais.

---

## 🛠️ Tecnologias Utilizadas

- **Python**:
  - Flask: Framework para desenvolvimento web.
  - pandas: Para manipulação e análise de dados.
  - hashlib: Para gerar códigos únicos.
  - datetime: Para manipular datas e horários.

- **Banco de Dados**:
  - MySQL: Utilizado para armazenar informações como URLs, cliques e monitoramento.

- **Front-end**:
  - HTML5, CSS3, Bootstrap: Para uma interface responsiva e moderna.
  - Plotly: Para gráficos interativos.

- **Documentos e Relatórios**:
  - python-docx: Para geração de arquivos Word.
  - python-pptx: Para criação de apresentações PowerPoint.

---

## 🗄️ Estrutura do Banco de Dados

### Tabela `urls`
| Campo             | Tipo          | Descrição                              |
|--------------------|---------------|----------------------------------------|
| `id`              | INT (PK)      | Identificador único.                   |
| `original_url`    | VARCHAR(255)  | URL original fornecida pelo usuário.   |
| `short_code`      | VARCHAR(50)   | Código curto gerado para a URL.        |
| `created_at`      | DATETIME      | Data de criação da URL encurtada.      |
| `last_click_at`   | DATETIME      | Data do último clique na URL.          |
| `last_click_ip`   | VARCHAR(50)   | IP do último clique registrado.        |
| `click_count`     | INT           | Número total de cliques acumulados.    |

