# VANILLA DISEÑO TEST


GALLERY

![MacBook Pro-1718657799282](https://github.com/Issblann/test_vanilla-disenio/assets/109175830/14f6fd06-8f84-455e-9c55-74a3a8d62c3e)
![iPad-1718657776162](https://github.com/Issblann/test_vanilla-disenio/assets/109175830/794615b3-c23f-4649-93f3-f5cb62e02cad)
![iPhone 12 Pro-1718657774145](https://github.com/Issblann/test_vanilla-disenio/assets/109175830/8f0683b5-f760-4f21-8bbd-cdaa14916f6d)

Uso de react, bootstrap y SASS.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
