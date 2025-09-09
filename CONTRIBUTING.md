# 🤝 Contributing Guide

First off, thanks for taking the time to contribute! 🎉  
This project is open-source under the **Unlicense**, so contributions of any kind are welcome.

---

## 📌 How Can I Contribute?

### 🐛 Reporting Bugs
- Use the [Issues](../../issues) page.
- Describe clearly:
  - What happened
  - Expected behavior
  - Steps to reproduce
  - Environment (OS, Node/Bun version, etc.)

### 💡 Suggesting Enhancements
- Open an [Issue](../../issues) with the **enhancement** label.
- Clearly describe:
  - The problem you’re solving
  - Your suggested solution
  - Alternatives considered

### 🛠️ Pull Requests
1. **Fork** the repo and create your branch:
```bash
git checkout -b feature/your-feature-name
```

2. Commit your changes with a clear message:
```bash
Commit your changes with a clear message:
```

3. Push to your fork and open a Pull Request.


## ⚙️ Development Setup
1. Clone the repo:
```bash
git clone https://github.com/RoBoCRAFTYT01/DatataStructure.git
cd DatataStructure
```

2. Install dependencies (choose your package manager):
```bash
bun install
# or
npm install
```

3. Build the project:
```bash
bun run build
```

4. Run tests:
```bash
bun run test
```

## 📏 Code Guidelines
- Use **TypeScript** for all new code.
- Follow existing folder structure:
    - `/Courses` → Learning materials & code examples
    - `/tests` → Jest tests
- Write tests for new algorithms or data structures.
- Keep functions pure and well-documented with comments.

## 🧪 Commit Message Convention
Follow this style (inspired by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)):
- `✨ feat:` New feature
- `🐛 fix:` Bug fix
- `📝 docs:` Documentation changes
- `✅ test:` Adding or updating tests
- `♻️ refactor:` Code refactor without changing features
- `⚡ perf:` Performance improvements
- `🔧 chore:` Build or tooling changes

**Example :**
```
✨ feat: add linked list implementation
```

# 📜 License

By contributing, you agree that your contributions will be licensed under the Unlicense.

# Thanks
Your contributions make this project better. PRs are always welcome! 🚀