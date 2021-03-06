# Elastos Elephant Wallet

This is the homepage of Elastos Elephant Wallet

Use react-static as the static site generating tool, ant design as the UI framework.

> Ant Design is a [React UI Component Library](https://github.com/ant-design/ant-design) written in Typescript & Less.
This example is enabled with TypeScript (though you can use JavaScript, losing
component typing) handling less files automatically.

To overwrite ant design theme variables, use `src/style/theme-ant-overwrite.less`.
The less loader takes those in to modify the original source.

This repo includes:
- general less support incl. source maps
- ant design UI components used in conjunction with styled components (for
customization)
- ant design babel plugin that is set to use original .less files with each
import from antd components
- TypeScript & Loader Configuration (full support)
- Source-Maps for everything (in dev)
- TypeScript paths alias mapping as a standard `webpack.config.js` used
within react-static's build system (see tsconfig.json` paths &
src/path-alias-example)
- TypeScript hot module replacement
- Simultaneous support of **using JavaScript and TypeScript interchangeably**
- Types for all modules (except react-static's costume methods — will be
added later)
- Styled-Components
- Image imports
- File imports
- Automatic Routing

## Run

```shell
npm install;
npm start
```

## Build

```shell
npm run build
```

## Deploy

```shell
npm run deploy
```