# POKEAPP

_Gotta Catch 'Em All!_

"POKEAPP" is a website to collect pokemons made in React JS with Typescript. This project is made in order to complete one of the recruitment stage of Tokopedia Indonesia.

## Tech Stack

* React JS
* Typescript
* Emotion JS
* Apollo GraphQL
* React Router

## Structure

Most of the important folders and files are inside the `src` folder. Inside, you will find 4 __files__:

1. `App.tsx`
2. `index.tsx`
3. `routes.tsx`
4. `styles.ts`

`App.tsx` is the root file where all the components are placed. `routes.tsx` is where the routes are placed, and `styles.ts` is the file for global styles.

Aside from the files, you will also find 4 __folders__:

1. `components`
2. `interfaces`
3. `pages`
4. `queries`

All of the pages are stored in `pages`. Inside, there is an `index.ts` file where all the pages are exported to make importing pages easier in other components.  `interfaces` folder contains all the typescript types needed for this project, and `components` folder is where the components are placed. Each component has its' own test inside the `__test__` folder. Last, all the queries needed to make request with GraphQL are located in `queries` folder.

## Deployment and Workflow

This project is deployed to github pages and can be accessed [here](https://alifsiregar.github.io/pokeapp/). The workflow consists of 4 steps:

1. `Install Dependencies`
2. `Run Test`
3. `Run ESLint`
4. `Build Project`
5. `Deploy Project`

To deploy the project, I am using JamesIves's [Github Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action).

## Documentation

In order to start the app in development mode,  you can run this syntax in the project directory:

### `npm start`

By default, the app will open in [http://localhost:3000](http://localhost:3000). The page also has hot reload, which means that it will refresh if you make any edits.

If you want to build the app for production,  you can run this syntax in the project directory:

### `npm run build`

This will bundle the React in production mode and optimizes the build for the best performance.

The build is then minified and the app is ready to be deployed!
