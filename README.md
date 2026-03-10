# The Bundle Bistro 🍜

A restaurant page built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) JavaScript curriculum.

**[Live Demo](https://aurel-charles.github.io/restaurant-page-TOP/)**

## About the Project

A single-page application for a fictional developer-themed restaurant — *The Bundle Bistro* — where every dish is named after a JavaScript tool or concept.

The entire page content is generated dynamically via JavaScript DOM manipulation. No HTML is written for the content itself — only a shell with a nav and a `#content` div.

## Features

- Tab-based navigation (Home / Menu / About) with active button highlighting
- Menu organized by category (Repas, Desserts, Boissons) with hover animations
- About page with address info and opening hours
- Current day highlighted in the hours section using [date-fns](https://date-fns.org/)

## Built With

- Vanilla JavaScript (ES6 modules)
- Webpack
- CSS
- date-fns

## What I Learned

- Dynamically rendering page content with DOM manipulation
- Organizing code with ES6 `import`/`export`
- Bundling a project with Webpack
- Using an external npm library (date-fns)
- Deploying to GitHub Pages via `git subtree`
