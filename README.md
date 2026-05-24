# Buke Portfolio

A minimal, professional one-page portfolio website for a Software Engineer and Cybersecurity Engineer. The site is built as a static project and is ready to host for free on GitHub Pages.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Features

- Dark, responsive one-page layout
- English and Mongolian language switcher
- Sticky navigation with mobile hamburger menu
- Hero, About, Skills, Projects, Cybersecurity, Contact, and Footer sections
- Project cards with GitHub, live demo, and security notes
- Cybersecurity learning area with honest lab and CTF-focused wording
- Smooth scrolling and active navigation state
- Semantic HTML, accessible contrast, keyboard-friendly navigation
- Lightweight static files with no backend, database, framework, or build tools

## Folder Structure

```text
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-1.png
│   │   ├── project-2.png
│   │   └── project-3.png
│   ├── icons/
│   │   ├── github.svg
│   │   ├── linkedin.svg
│   │   ├── email.svg
│   │   └── shield.svg
│   └── resume/
│       └── resume.pdf
├── css/
│   └── style.css
└── js/
    └── main.js
```

## How to Run Locally

Open `index.html` directly in a browser.

You can also serve it with any static server if you prefer:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages Deployment

1. Push this project to your GitHub repository:

   ```bash
   git remote add origin https://github.com/gitbukeishere/buke-portfolio.git
   git branch -M main
   git add .
   git commit -m "Add portfolio website"
   git push -u origin main
   ```

2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save the settings.

Your site will be available at:

```text
https://gitbukeishere.github.io/buke-portfolio/
```

## Screenshots

Add screenshots here after deployment.

```text
assets/images/screenshot-home.png
assets/images/screenshot-projects.png
```

## License

This project is available for personal portfolio use. Add your preferred license before publishing if needed.
