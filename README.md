# The Cozy Corner

A polished, responsive website for a neighborhood coffee shop. The experience combines a warm editorial design with a filterable menu, persistent shopping cart, daily offer, and a complete pickup-order flow.

## Features

- Responsive layout for desktop, tablet, and mobile
- Filterable coffee, cold drink, and pastry menu
- Persistent cart using browser local storage
- Quantity controls and live subtotal calculation
- Pickup-order confirmation with an order number
- Daily-offer modal and mobile navigation
- Semantic HTML, accessible labels, keyboard support, and reduced-motion styles
- Optimized, item-specific product photography

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage
- GitHub Pages

## Project structure

```text
the-cozy-corner/
├── img/           # Brand and menu imagery
├── index.html     # Page structure and content
├── styles.css     # Responsive styling and design system
├── script.js      # Menu, cart, offers, and checkout behavior
├── .gitignore
└── README.md
```

## Run locally

No build step or dependencies are required.

1. Clone the repository.
2. Open `index.html` in a modern browser.

For a local HTTP server, run one of the following from the project folder:

```bash
npx serve .
```

or:

```bash
python -m http.server 8000
```

## Deploy with GitHub Pages

1. Open the repository's **Settings**.
2. Select **Pages** under **Code and automation**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then save.

The site contains no server-side dependencies and can be published directly from the repository root.

## Accessibility

The interface includes a skip link, semantic landmarks, descriptive image text, accessible control labels, keyboard-operable dialogs, and reduced-motion behavior for visitors who request it.

## Author

Developed by [Azza Almousli](https://github.com/azzaalmousli).
