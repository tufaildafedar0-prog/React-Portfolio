# 💼 Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript to showcase my skills, projects, and resume.

---

## 🚀 Features

### 🏠 Home Page:
- Visually appealing landing page with my name, brief bio, and profile picture.
- Smooth animated hero section.
- Navigation links to About, Projects, and Contact.

### 👤 About Page:
- Detailed "About Me" section with education, certifications, and hobbies.
- Glassmorphism and modern card layouts.
- Downloadable resume button.

### 💻 Projects Page:
- Gallery of software development projects with titles, descriptions, and images.
- Responsive, visually organized project cards.

### 📬 Contact Page:
- Contact form with fields for name, email, subject, and message.
- JavaScript validation for required fields.
- Clickable email and phone links.

### 📱 Responsive Design:
- Fully responsive for desktop, tablet, and mobile.
- Uses media queries and flexible layouts.

### 🧭 Navigation:
- Smooth scrolling between sections.
- Active link highlighting.

### ✨ Interactivity & Bonus Features:
- Animated counters and interactive elements.
- Hover effects on buttons and images.
- Carousel/slider for testimonials or projects (if implemented).
- Glassmorphism and gradient backgrounds for modern look.

### 📄 Resume Download:
- Button to download/view my resume as a PDF.

---

## 📂 Project Structure

This project is a React app scaffolded with Vite. Key files and folders:

- `index.html` – Vite entry HTML
- `netlify.toml` – Netlify deployment config (if used)
- `package.json` – npm scripts & dependencies
- `vite.config.js` – Vite configuration
- `src/` – Application source code
	- `main.jsx` – Application bootstrap
	- `App.jsx` – Root React component
	- `assets/img/` – Images and static assets
	- `components/` – Reusable UI components (`Navbar.jsx`, `Footer.jsx`, etc.)
	- `pages/` – Page components (`Home.jsx`, `About.jsx`, `Contact.jsx`, `Projects.jsx`)
	- `styles/` – Component/page styles (`global.css`, `home.css`, etc.)

---
---

## 🛠️ Technologies Used

- HTML5  
- CSS3 (with Bootstrap 5 and custom styles)  
- JavaScript (for interactivity and validation)  
- Font Awesome (icons)  
- Google Fonts

---

## 📱 Responsive Design

The website is fully responsive and adapts to all screen sizes using CSS media queries and Bootstrap’s grid system.

---

## 📝 How to Use

### Local development (Windows PowerShell)

Prerequisites: Node.js v16+ (v18 recommended) and npm installed.

1. Clone the repo and change into the project folder:

```powershell
git clone <repo-url>
cd React-Portfolio
```

2. Install dependencies:

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

Open `http://localhost:5173` in your browser to view the site (Vite default port).

### Build & Preview (production)

```powershell
npm run build
npm run preview
```

`npm run preview` serves the production build locally so you can verify the built site.

### Deploy

- GitHub Pages: this project includes a `deploy` script that uses `gh-pages`:

```powershell
npm run deploy
```

- Netlify: connect the repository to Netlify (or use the Netlify CLI) and set the publish directory to `dist`.

### Available npm scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build production files to `dist`
- `npm run preview` — Preview production build locally
- `npm run deploy` — Deploy to GitHub Pages (if configured)

---

**Download Resume:**  
Click the resume button on the About page to view/download the PDF (if uploaded).

---

## 📧 Contact

For any queries, use the contact form or email me directly at [tufaildafedar0@gmail.com].

---

