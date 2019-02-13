# Example of using `etty` with `etty-webpack-plugin`

**WORK IN PROGRESS**

## Show things TODO

- [x] Initial dev-server setup  
- [x] Automatical translation files generating during dev-server watch with `etty-webpack-plugin` (see console output!)
- [ ] Locale-based routing
- [ ] Initialization of the `etty` store
- [ ] Observing translations on locale change
- [ ] Generating translations during simple build 
- [ ] Document code

## How to run?
1. Clone this repo
2. Install dependencies
```
npm install
```
3. Run dev-server
```
npm run dev
```
or using `yarn`
```
yarn dev
```
4. Open **http://0.0.0.0:1337** in browser.
5. Enjoy!

## What is used?
- `react`, `react-dom` (16+)
- `react-router-dom` (ReactRouter v4)
- `mobx` (4+), `mobx-react`
- `etty`, `etty-webpack-plugin`
- `webpack`, `webpack-dev-server`
- `typescript` and `awesome-typescript-loader`