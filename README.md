# Welcome to Astro Template

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 💨 Commands

All commands are run from the root of the project, from a terminal:

| Command                        | Action                                             |
| :----------------------------- | :------------------------------------------------- |
| `npm install`                  | Installs dependencies                              |
| `npm run dev`                  | Starts local dev server at `localhost:3000`        |
| `npm run build`                | Build your production site to `./dist/`            |
| `npm run preview`              | Preview your build locally, before deploying       |
| `npm run astro ...`            | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help`         | Get help using the Astro CLI                       |
| `npm run format`               | Format your code with Prettier                     |
| `npm run lint:eslint`          | Lint your code with ESLint                         |
| `npm run lint:eslint:fix`      | Lint and fix your code with ESLint                 |
| `npm run check:update`         | Check all dependencies for updates                 |
| `npm run check:update:install` | Update all dependencies to the latest version      |

## 📦 Packages

| Package Name        | Description                   |
| :------------------ | :---------------------------- |
| `astro`             | The Astro compiler.           |
| `eslint`            | Linting for JavaScript.       |
| `prettier`          | Code formatting.              |
| `npm-check-updates` | Check for dependency updates. |

## 🎨 CSS Reset

CSS reset built-in. You can find it in `src/styles/global.css`.

## ⭐️ Extension VSCode

- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
