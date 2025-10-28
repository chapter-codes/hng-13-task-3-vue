🎟️ HNG Task 3 — TicketApp (Vue Version)

A multi-framework Ticket Management Web App built using Vue 3 + Vite + Tailwind CSS 3.
This project represents the Vue.js version of the HNG Stage 2 Task — maintaining the same UI layout, authentication logic, and ticket CRUD features as other frameworks.

📦 Repository: https://github.com/chapter-codes/hng-13-task-3-vue
🌐 Live Demo: https://hng-13-task-3-vue.vercel.app


React Version: https://github.com/chapter-codes/hng-13-task-3-react
🌐 Live Demo: https://hng-13-task-3-react.vercel.app


Twig Version: https://github.com/chapter-codes/hng-13-task-3-twig
🌐 Live Demo: https://scared-genius.github.io/twig-build

🧰 Frameworks & Libraries Used
Category	Tool
Frontend Framework	Vue 3

Routing	Vue Router 4

Styling	Tailwind CSS 3

Build Tool	Vite 5

PostCSS Tools	PostCSS + Autoprefixer
🚀 Setup & Development
1️⃣ Clone the repository
git clone https://github.com/chapter-codes/hng-13-task-3-vue.git
cd hng-13-task-3-vue

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


Visit http://localhost:5173
 in your browser.

4️⃣ Build for production
npm run build

5️⃣ Preview production build
npm run preview

🧱 Project Structure
src/
├── assets/
│   └── hero-wave.svg
├── components/
│   ├── Header.vue
│   ├── Footer.vue
│   └── CustomSection.vue
├── pages/
│   ├── Landing.vue
│   ├── Auth/
│   │   ├── Login.vue
│   │   └── Signup.vue
│   ├── Dashboard.vue
│   └── Tickets.vue
├── router/
│   └── index.js
├── store/
│   └── auth.js
└── main.js

🔐 Authentication

Simulated authentication via localStorage key: ticketapp_session.

Users without a valid session are redirected to /auth/login.

Logout clears the session and redirects to the landing page.

Example test user:

email: test@ticketapp.com
password: password123

🧮 Ticket Management (CRUD)

Each ticket contains:

title (required)

status (open / in_progress / closed)

description (optional, validated for length)

Action	Description
Create	Add a new ticket through a form with validation
Read	View all tickets in responsive card grid
Update	Edit ticket information with validation
Delete	Remove tickets with confirmation prompt

Status color mapping:

Status	Color
open	Green
in_progress	Amber
closed	Gray
🎨 Layout & Design Consistency

Max width: 1440px, centered layout.

Hero section includes SVG wave background and circular decoration.

Feature and ticket boxes have rounded corners and shadows.

Responsive grid for all breakpoints (mobile → desktop).

Shared color palette across frameworks.

♿ Accessibility

Semantic tags (<header>, <section>, <footer>).

Visible focus states on buttons/links.

Meaningful alt text on images.

Proper color contrast for all text.

🧩 Known Issues

Authentication is local only (no backend).

Page refresh clears transient Vuex state (expected).

🔗 Other Implementations



© 2025 — HNG Stage 2 Task by chapter-codes