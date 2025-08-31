````markdown
# depcheck-cli

A powerful **Node.js CLI tool** to analyze dependencies in your project.  
Find **unused packages** and detect **deprecated dependencies** to **reduce bundle size** and keep your project healthy.

[npm version](https://img.shields.io/npm/v/depcheck-cli.svg)(https://www.npmjs.com/package/depcheck-cli)
[npm downloads(https://img.shields.io/npm/dm/depcheck-cli.svg)(https://www.npmjs.com/package/depcheck-cli)
[license](https://img.shields.io/github/license/masterdevsabith/depcheck-cli.svg)(LICENSE)

---

## 🚀 Features

- ✅ Detect **unused dependencies** in your project
- ✅ Identify **deprecated packages** from npm registry
- ✅ Fast, lightweight, and developer-friendly
- ✅ Works with **JavaScript, TypeScript, React, Next.js, Node.js apps**

---

## 📦 Installation

Install globally:

```sh
npm install -g depcheck-cli
```
````

Or use with `npx` (no install needed):

```sh
npx depcheck-cli
```

---

## ⚡ Usage

Find unused dependencies:

```sh
depcheck-cli unused
```

Check deprecated packages:

```sh
depcheck-cli deprecated
```

---

## 📊 Example Output

```sh
✔ Found 12 unused dependencies:
- lodash
- moment
- request

✔ Deprecated packages detected:
- request (deprecated, use node-fetch instead)
- left-pad (deprecated)
```

---

## 🔑 Why Use depcheck-cli?

- 🛠️ Keep your project clean by removing **unused packages**
- 🚨 Avoid security risks from **deprecated dependencies**
- 📈 Improve project **maintainability and health**

---

## 📖 Related Keywords

`unused dependencies` · `dependency checker` · `deprecated packages` · `npm audit alternative` · `optimize node_modules` · `nodejs cli tool` · `remove unused npm packages` · `dependency analyzer`

---

## 🛠 Roadmap

- [ ] Add largest package size detection
- [ ] Interactive cleanup mode for removing unused deps
- [ ] JSON/HTML report output
- [ ] Integration with CI/CD pipelines
- [ ] Support for monorepos (Lerna, Nx, Turborepo)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check [issues](https://github.com/masterdevsabith/depcheck-cli/issues).

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## ⭐ Support

If you find `depcheck-cli` useful, consider giving it a ⭐ on [GitHub](https://github.com/masterdevsabith/depcheck-cli) and sharing it with your team.
