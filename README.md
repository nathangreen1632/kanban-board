# <strong><span id="top"> Krazy Kanban Board </span></strong>

![Tech Stack](https://img.shields.io/badge/stack-Node.js%20%7C%20React%20%7C%20PostgreSQL-blue)

![Build](https://img.shields.io/badge/build-passing-brightgreen)

![License](https://img.shields.io/badge/license-MIT-green)

![Deployed](https://img.shields.io/badge/deployed-Netlify%20%7C%20Render-orange)

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
Krazy Kanban Board is a streamlined task management application designed to help individuals and teams efficiently manage their workflows. With an intuitive Kanban-style interface, users can create tasks, assign them to specific categories, and move them across columns manually to track progress visually. The platform enables real-time collaboration, making it easy for team members to stay updated on project developments.

The board supports customizable task categories, empowering users to define their workflow structure to fit their unique needs. Real-time updates ensure that all changes are instantly reflected for every team member, fostering a more organized and productive work environment. Whether for personal task tracking or enterprise-level project management, Krazy Kanban Board provides a flexible and scalable solution to streamline your work.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___


## Key Features
**Customizable Columns** – Add, remove, and rename task categories to tailor the board to specific project needs.

**Task Management** – Users can create, update, and delete tasks with detailed descriptions and priority levels.

**Persistent Storage** – Saves tasks and boards in a PostgreSQL database, ensuring data consistency and availability.

**Real-Time Updates** – Keeps all users in sync with WebSockets, allowing instant visibility of changes across the board.

**User Roles & Permissions** – Admins can control user access levels, restricting modifications to assigned team members.

**Analytics Dashboard** – Provides insights on task progress, completion rates, and overall project efficiency.

**Notifications System** – Alerts users when tasks are updated or assigned, keeping everyone informed.

**Responsive UI** – A seamless user experience on both desktop and mobile devices, ensuring accessibility anywhere.

**User Authentication** – Secure login with JWT-based authentication to protect user data and session integrity.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## Technologies Used
### **Frontend:** 
  <br>&nbsp; <span id="html5"> [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/html5)</span>
  <br>&nbsp; <span id="css-3">[![CSS 3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/css_intro.asp)</span>
  <br>&nbsp; <span id="typescript">[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)</span>
  <br>&nbsp; <span id="react">[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)</span>
  <br>&nbsp; <span id="vite">[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vite.dev/)</span>

### **Backend:** 
  <br>&nbsp; <span id="node.js">[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)</span>
  <br>&nbsp; <span id="express">[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)</span>
  <br>&nbsp; <span id="react-router">[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)</span>
  <br>&nbsp; <span id="npm">[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)</span>

### **Database:** 
  <br>&nbsp; <span id="postgresql">[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org)</span>
  <br>&nbsp; <span id="sequelize">[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org)</span>

### **Authentication:** 
  <br>&nbsp; <span id="jwt">[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io)</span>
    <br>&nbsp; <span id="bcrypt">[![bcrypt](https://img.shields.io/badge/bcrypt-000000?style=for-the-badge&logo=bcrypt&logoColor=white)](https://www.npmjs.com/package/bcrypt)</span>

### **Deployment:**
  <br>&nbsp; <span id="render">[![Render](https://img.shields.io/badge/Render-333?style=for-the-badge&logo=render&logoColor=white)](https://render.com)</span>
  <br>&nbsp; <span id="netlify">[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)</span>

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

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add:
```sh
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
This will start both the frontend and backend using concurrently.

### Build Commands
- **Frontend:**
  ```sh
  npm run build
  ```
- **Backend:**
  ```sh
  npm run start
  ```

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## <span id="contributing"> Contributing </span>
Contributions to this project are highly encouraged and appreciated. If you want to improve the project or introduce new features, follow the structured workflow below to ensure a smooth collaboration process.

### **<span id="contributing-workflow">Contributing Workflow:</span>**
1. **<span> Fork the Repository </span>**:
   Navigate to the original GitHub repository page and click on the 'Fork' button at the top-right corner. This creates a personal copy of the project under your GitHub account.


2. **<span> Clone Your Fork </span>**:
   Clone the repository to your local machine using the following command:
    ```bash
    git clone https://github.com/YOUR_USERNAME/applicant-manager.git
    cd applicant-manager
    ```

3. **<span> Create a New Branch </span>**:
   Create a new branch to work on your changes. naming your branch appropriately helps in identifying its purpose.
    ```bash
    git checkout -b feature-branch
    ```

4. **<span> Make Your Changes </span>**:
   Implement your desired improvements, whether it's fixing bugs, enhancing features, or improving documentation. Ensure you follow the project's coding standards and guidelines.


5. **<span> Commit Your Changes </span>**:
   Stage and commit your modifications with a meaningful message:
    ```bash
    git add -A
    git commit -m "Add feature: Detailed description of your changes made"
    ```

6. **<span> Push Your Fork </span>**:
   Push your changes to your forked repository on GitHub:
    ```bash
    git push origin feature-branch
    ```

7. **<span> Submit a Pull Request </span>**:
   Go to the original repository and click on `Pull Requests`. Click `New Pull Request`, select your feature branch, and provide a comprehensive description of your changes, including the purpose and impact.


8. **<span> Review and Collaborate </span>**:
   Your pull request will be reviewed by project maintainers to ensure it meets quality standards and aligns with project goals. Constructive feedback will be provided if necessary. Once approved, it will be merged into the main branch.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

___

## Supplemental Docs

### Tests
No tests available at this time. 

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Questions
For any inquiries, reach out via [GitHub](https://github.com/nathangreen1632).

### Deployed Page
Check out the live version: **[Krazy Kanban Board](https://your-deployed-link.com)**

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>