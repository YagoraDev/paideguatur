# PAIDEGUATUR - Site Oficial de Turismo

Bem-vindo ao repositório oficial do site da **PAIDEGUATUR**. Este é um site institucional e comercial focado na venda de roteiros turísticos autênticos na região do Pará, com forte atuação no **Marajó**, mas abrangendo também Belém, Ilha do Combu, Icoaraci, Mosqueiro e Rio Guamá.

O site foi desenvolvido para ser **leve, direto e focado em conversão**, eliminando a necessidade de cadastros ou sistemas complexos. O fluxo do usuário é simples: ele conhece os destinos, visualiza o roteiro detalhado, confere o valor e entra em contato diretamente com o cliente via WhatsApp.

> ⚠️ **Nota:** Este é um produto finalizado e em produção, não um projeto open-source. O código é de propriedade do desenvolvedor e do cliente (PAIDEGUATUR).

---

## Links Oficiais

- **Site em Produção (Hospedagem HostGator):** [https://marajopaideguatur.com.br/] 
- **Preview / Vercel:** [https://paideguatur.vercel.app/] 

---

## Sobre o Projeto

O site foi construído sob medida para atender às necessidades da agência **Pai D'Egua Viagens e Turismo Ltda**. Ele resolve o problema de clientes que buscam informações claras e rápidas sobre passeios na região sem a burocracia de plataformas de reservas complexas.

**Principais Características:**
- **Navegação Fluida:** Interface limpa e intuitiva, com foco na experiência do usuário (UX).
- **Foco no WhatsApp:** Todos os roteiros possuem um botão de CTA (Call to Action) direcionando para o WhatsApp do cliente com mensagem pré-formatada.
- **Roteiros Detalhados:** Cada passeio possui uma página dedicada com descrição, galeria de fotos e valores.
- **Leveza:** Construído em HTML, CSS e JavaScript puros (Vanilla), sem frameworks pesados, garantindo carregamento rápido mesmo em conexões móveis.

---

## 🗺️ Estrutura de Destinos e Passeios

O site está organizado em arquivos HTML independentes para cada roteiro, facilitando a manutenção e a adição de novos passeios. Atualmente, a estrutura é:

### Passeios no Marajó (Foco Principal)
- `01-salvaterra_um_dia.html` - Roteiro de 1 dia em Salvaterra.
- `02_soure_um_dia.html` - Roteiro de 1 dia em Soure.
- `03_soure_salvaterra_dois_dias.html` - Roteiro de 2 dias integrando Soure e Salvaterra.
- `04_soure_dois_dias.html` - Roteiro de 2 dias focado em Soure.
- `05_soure_salvaterra_tres_dias.html` - Roteiro completo de 3 dias.

### Passeios em Belém e Região Metropolitana
- `06_city_tour_belem.html` - City Tour pela capital paraense.
- `07_city_tour_icoraci.html` - Passeio por Icoaraci.
- `08_ilha_de_mosqueiro.html` - Roteiro na Ilha de Mosqueiro.
- `09_river_tour_rio_guama.html` - River Tour pelo Rio Guamá.
- `10-ilha-do-combu.html` - Passeio na Ilha do Combu.

*(Outros arquivos como `creditos.html` também estão presentes para fins de licenciamento e créditos de imagens).*

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica de todas as páginas.
- **CSS3:** Estilização, layout responsivo e animações (pasta `css/`).
- **JavaScript:** Comportamentos dinâmicos, como menus, galerias e interações (pasta `js/`).
- **Fontes:** Tipografia customizada (pasta `fonts/`).
- **Imagens:** Banco de imagens dos destinos (pasta `img/`).

---

## 📂 Estrutura de Pastas do Repositório

```text
/
├── css/                  # Folhas de estilo do site
├── fonts/                # Arquivos de fontes tipográficas
├── img/                  # Imagens dos destinos e galerias
├── 01-salvaterra_um_dia.html
├── 02_soure_um_dia.html
├── 03_soure_salvaterra_dois_dias.html
├── 04_soure_dois_dias.html
├── 05_soure_salvaterra_tres_dias.html
├── 06_city_tour_belem.html
├── 07_city_tour_icoraci.html
├── 08_ilha_de_mosqueiro.html
├── 09_river_tour_rio_guama.html
├── 10-ilha-do-combu.html
├── creditos.html
├── creditos.html
├── index.html
└── script.js
