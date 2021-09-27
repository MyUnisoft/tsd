<p align="center"><h1 align="center">
  TSD
</h1>

<p align="center">
  MyUnisoft public TypeScript interfaces and types
</p>

<p align="center">
    <a href="https://github.com/MyUnisoft/tsd"><img src="https://img.shields.io/github/package-json/v/MyUnisoft/tsd?style=flat-square" alt="npm version"></a>
    <a href="https://github.com/MyUnisoft/tsd"><img src="https://img.shields.io/github/license/MyUnisoft/tsd?style=flat-square" alt="license"></a>
    <a href="https://github.com/MyUnisoft/tsd"><img src="https://img.shields.io/github/languages/code-size/MyUnisoft/tsd?style=flat-square" alt="size"></a>
    <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg?style=flat-square" alt="Responsible Disclosure Policy" /></a>
</p>

## 📢 About

This package has been designed to allow declaring and sharing TypeScript interfaces and types across several of our projects (public or private).

## 🚧 Requirements
- [Node.js](https://nodejs.org/en/) v14 or higher

## 🚀 Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @myunisoft/tsd -D
```

> ⚠️ **-D** stand for **DevDependencies**.

## API

There is multiple exported `namespace` in the local file `index.d.ts`.

```ts
export {
  Auth,
  Windev,
  Utils,
  MemberGroup,
  Account,
  AccountNoCp,
  BearerToken,
  ApiToken,
  UserToken,
  FirmToken
}
```
