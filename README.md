# ☕ The Cozy Corner

![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interactive-F7DF1E?logo=javascript&logoColor=1d1d1d)
![GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-222222?logo=github&logoColor=white)

A warm, modern coffee-shop experience built with semantic HTML, responsive CSS, and vanilla JavaScript. The Cozy Corner combines editorial visual design with a complete interactive menu and pickup-order journey—without frameworks or build dependencies.

### [View the live website →](https://azzaalmousli.github.io/the-cozy-corner/)

---

## ✨ About the project

The Cozy Corner began as a responsive coffee-shop landing page and has grown into a polished, fully interactive front-end experience. Visitors can explore the shop's story, filter a visual menu, add products to a persistent cart, adjust quantities, and complete a simulated pickup order.

The finished design uses a consistent espresso, caramel, and cream palette inspired by the original hero image. Every section, product image, and interaction now belongs to the same visual system.

## 🚀 What was improved

### Design and content

- Reworked the full color system to match the opening hero section
- Improved typography, spacing, contrast, and visual hierarchy
- Expanded the menu to eight coffee, cold drink, and pastry options
- Replaced mismatched photos with item-specific product imagery
- Added opening hours, a stronger brand story, and clearer contact details
- Refined desktop, tablet, and mobile layouts

### Functionality

- Added filter controls for coffee, cold drinks, and pastries
- Built a persistent shopping cart with browser local storage
- Added quantity controls, item removal, and live subtotal calculation
- Added a daily-offer modal and pickup-order confirmation flow
- Added an accessible mobile navigation menu
- Added subtle reveal animations with reduced-motion support

### Quality and maintenance

- Repaired invalid and unclosed HTML elements
- Corrected email, telephone, location, and navigation links
- Removed fixed-height overflow and small-screen layout bugs
- Added semantic landmarks, descriptive image text, and accessible labels
- Removed duplicate deployment output, outdated screenshots, and unused assets
- Reorganized the repository into a clean, production-ready structure
- Published the finished website with GitHub Pages

## 🛍️ Current menu

| Category | Items |
| --- | --- |
| Hot coffee | Velvet Latte, Classic Cappuccino, House Flat White |
| Cold coffee | Iced Vanilla Latte, Slow Cold Brew |
| Fresh pastries | Butter Croissant, Chocolate Muffin, Cinnamon Roll |

## 🛠️ Built with

- **HTML5** — semantic page structure and accessible content
- **CSS3** — responsive layouts, design tokens, animations, and media queries
- **Vanilla JavaScript** — filters, cart state, dialogs, navigation, and checkout
- **Local Storage** — cart persistence between browser sessions
- **GitHub Pages** — public static-site deployment

No framework, package installation, or build step is required.

## 📁 Project structure

```text
the-cozy-corner/
│
├── img/            # Brand, hero, product, and menu imagery
├── index.html      # Semantic structure and website content
├── styles.css      # Visual system and responsive layouts
├── script.js       # Menu, cart, offers, and checkout interactions
├── .gitignore
└── README.md
```

## 💻 Run locally

Clone the repository:

```bash
git clone https://github.com/azzaalmousli/the-cozy-corner.git
cd the-cozy-corner
```

Then open `index.html` in a modern browser. You can also run a small local server:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## ♿ Accessibility

The website includes semantic landmarks, a skip link, keyboard-operable controls, descriptive alternative text, accessible button labels, dialog close controls, visible focus targets, and a reduced-motion experience for visitors who request it.

## 🌐 Deployment

The production site is deployed from the `main` branch through GitHub Pages:

**[https://azzaalmousli.github.io/the-cozy-corner/](https://azzaalmousli.github.io/the-cozy-corner/)**

## 👩‍💻 Author

Designed and developed by [Azza Almousli](https://github.com/azzaalmousli).
