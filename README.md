<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=220&section=header&text=PhotoCartier&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=Plataforma%20para%20fotógrafos%20exploradores&descAlignY=58&descSize=20&animation=fadeIn" width="100%"/>

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange?style=for-the-badge)](https://github.com/seu-usuario/photocartier)
[![License](https://img.shields.io/badge/license-MIT-302b63?style=for-the-badge)](LICENSE)
[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![HTML CSS JS](https://img.shields.io/badge/HTML%20%7C%20CSS%20%7C%20JS-Frontend-e34c26?style=for-the-badge&logo=html5&logoColor=white)](#)

</div>

---

## 📋 Sobre o Projeto

O **PhotoCartier** é uma plataforma em desenvolvimento voltada para fotógrafos, com o objetivo de ser um espaço para descobrir, avaliar e rankear os melhores spots fotográficos do Brasil.

A visão do projeto é funcionar como uma rede social para fotógrafos, combinando descoberta de locais, avaliações da comunidade, gamificação e ranking nacional. Por ora, o projeto está em sua fase inicial de construção.

---

## 🚧 Estado Atual

O projeto está nos **estágios iniciais de desenvolvimento**. O que existe hoje:

**Frontend (HTML + CSS + JS puro)**
- `index.html` — Página inicial com animação de catavento de fotos e efeito de digitação no título
- `login.html` — Tela de login e cadastro (formulário estático, sem integração com backend ainda)
- `feed.html` — Página de feed (estrutura inicial)
- `css/style.css` — Estilização responsiva (mobile, tablet, desktop)
- `js/index.js` — Lógica do tema claro/escuro e efeito de máquina de escrever
- `js/login.js` — Lógica de alternância entre formulários de login e cadastro

**Backend (Java + Spring Boot)**
- Projeto Spring Boot inicializado com Maven
- Dependências configuradas: Spring Web MVC, Spring Data JPA, MySQL
- Ainda sem nenhuma entidade, repositório, serviço ou endpoint implementado

> O backend é um projeto gerado pelo Spring Initializr e ainda não possui lógica de negócio.

---

## 🎯 Visão do Produto

O que o PhotoCartier pretende se tornar:

- 📍 Cadastro e descoberta de locais fotográficos no Brasil
- ⭐ Sistema de avaliações da comunidade
- 🏆 Ranking de spots por qualidade, estado e categoria
- 🎮 Gamificação com XP, níveis e badges para fotógrafos
- 👤 Perfis de fotógrafos com histórico e estatísticas
- 🗺️ Mapa interativo com os spots cadastrados

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (puro) |
| Backend | Java 17, Spring Boot 4, Spring Data JPA |
| Banco de Dados | MySQL |
| Build | Maven |

---

## 📁 Estrutura do Projeto

```
photoCartier/
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── imagens/
│   │   └── (fotos dos spots e assets visuais)
│   ├── js/
│   │   ├── index.js
│   │   └── login.js
│   ├── index.html
│   ├── login.html
│   └── feed.html
└── demo/
    └── demo/
        ├── src/main/java/com/example/demo/
        │   └── DemoApplication.java
        ├── src/main/resources/
        │   └── application.properties
        └── pom.xml
```

---

## ▶️ Como Executar

### Frontend

Basta abrir o arquivo `frontend/index.html` diretamente no navegador. Não há dependências ou build necessário.

### Backend

**Pré-requisitos:** Java 17 e Maven instalados.

```bash
cd demo/demo
./mvnw spring-boot:run
```

> ⚠️ O backend ainda não possui endpoints funcionais. Para rodar, é necessário ter um MySQL ativo e configurar a conexão em `application.properties`.

---

## 🗺️ Próximos Passos

- [ ] Configurar conexão com banco de dados MySQL no backend
- [ ] Criar entidade `Spot` (local fotográfico) com JPA
- [ ] Criar entidade `Usuario`
- [ ] Implementar endpoints REST básicos (CRUD de spots)
- [ ] Conectar o frontend ao backend via fetch/API
- [ ] Implementar autenticação real no login
- [ ] Criar página de listagem e detalhes de spots

---

## 🤝 Contribuição

O projeto está em fase inicial e contribuições são bem-vindas.

```bash
# 1. Fork o repositório
# 2. Crie uma branch para sua feature
git checkout -b feature/nome-da-feature

# 3. Commit suas mudanças
git commit -m "feat: descrição da mudança"

# 4. Abra um Pull Request
```

---

## 📄 Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais informações.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=100&section=footer" width="100%"/>

**PhotoCartier** — Em construção 🚧

</div>

