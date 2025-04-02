# <strong><span id="top"> Krazy Kanban Board </span></strong>

![Tech Stack](https://img.shields.io/badge/stack-Node.js%20%7C%20Express.js%20%7C%20React%20%7C%20PostgreSQL-blue)

![Build](https://img.shields.io/badge/build-passing-brightgreen)

![License](https://img.shields.io/badge/license-MIT-green)

![Deployed](https://img.shields.io/badge/deployed-Render-limegreen)

## Table of Contents
<details>
  <summary>Click to expand</summary>

- [About](#about)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Supplemental Docs](#supplemental-docs)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    - [Deployed Page](#deployed-page)
</details>

---

## About
Krazy Kanban Board is a robust full-stack task management application powered by React, Node.js, and PostgreSQL. It allows users to create, manage, and categorize tasks in a drag-and-drop Kanban layout. With integrated authentication, protected routes, and real-time state updates via API, the app is ideal for collaborative or personal workflow management.

The platform features modular context management (via `UserContext`) for global user state, JWT-based authentication with persistent tokens, and seamless navigation using React Router v6. The app is deployed on **Render (backend)** and **Netlify (frontend)** with client-side routing correctly managed through Express fallback routing.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___


## Key Features
**Context-Based User State** – Global login state managed with React Context + JWT token decoding

**Protected Routing** – Uses React Router with authentication gating to restrict access to protected pages

**User Login System** – Custom login API endpoint returns JWT stored in localStorage and parsed via `jwt-decode`

**Kanban Swimlanes** – Visual display of tasks filtered by status (Todo, In Progress, Done)

**Database Sync** – Sequelize ORM manages PostgreSQL schema, with relational models for Users and Tickets

**Persistent Ticket Management** – Add, edit, and delete tickets via protected API endpoints

**Typesafe Codebase** – Full TypeScript support across backend and frontend, with strict types and reusable interfaces

**Custom Express Catch-All** – Handles React Router client-side navigation to avoid `Cannot GET /login` on refresh

**Production-Ready Deployment** – Works fully in both local dev and deployed environments with server/static fallbacks

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## Technologies Used
### **Frontend:**
<br>&nbsp; [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/html5)
<br>&nbsp; [![CSS 3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/css_intro.asp)
<br>&nbsp; [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
<br>&nbsp; [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
<br>&nbsp; [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vite.dev/)

### **Backend:**
<br>&nbsp; [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
<br>&nbsp; [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
<br>&nbsp; [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
<br>&nbsp; [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)

### **Database:**
<br>&nbsp; [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org)
<br>&nbsp; [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org)

### **Authentication:**
<br>&nbsp; [![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io)
<br>&nbsp; [![bcrypt](https://img.shields.io/badge/bcrypt-000000?style=for-the-badge&logo=bcrypt&logoColor=white)](https://www.npmjs.com/package/bcrypt)

### **Deployment:**
<br>&nbsp; [![Render](https://img.shields.io/badge/Render-333?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v22 recommended)
- [PostgreSQL](https://www.postgresql.org/) (v17 recommended)
- [Git](https://git-scm.com/) (version control)

### Clone the Repository
```sh
git clone https://github.com/nathangreen1632/kanban-board.git
cd kanban-board
```

### Install Dependencies (root + client + server)
```sh
npm install
cd client && npm install
cd ../server && npm install
```

### Set Up Environment Variables
Create a `.env` file in the `server/` directory and add:
```env
DATABASE_URL=postgres://your_db_user:your_db_password@localhost:5432/kanban_db
JWT_SECRET_TOKEN=your_secret_key
```

### Database Migration
```sh
npx sequelize-cli db:migrate
```

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## Usage

### Run Locally
```sh
npm run dev
```
This runs frontend (Vite) and backend (Express) concurrently.

### Build Production Frontend
```sh
cd client && npm run build
```
Then serve it with Express. Confirm Express static fallback is set for `/dist`.

### Backend Start (after build)
```sh
cd server && npm run start
```

### Access App
Open [http://localhost:3001](http://localhost:3001) — React Router routes like `/login` will now work directly!

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## <span id="contributing"> Contributing </span>
Contributions are welcome and appreciated! Please follow this Git-style workflow:

### Workflow:
1. **Fork the repo**
2. **Clone your fork**
3. **Create a new branch**
4. **Write code & commit**
5. **Push your branch**
6. **Open a Pull Request (PR)**
7. **Review, update, and merge**

Use clear commit messages and structured PR descriptions.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## Supplemental Docs

### Tests
Tests coming soon. Testing structure will include Jest, Supertest (backend), and React Testing Library (frontend).

### License
MIT License. See the [LICENSE](LICENSE) file.

### Questions
Contact via [GitHub](https://github.com/nathangreen1632).

### Deployed Page
Live App: **[Krazy Kanban Board](https://your-deployed-link.com)**

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

