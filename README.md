# Vue.js TypeScript Frontend Skeleton Project

> A skeleton project with Vue.js, TypeScript, Bootstrap, Less, Webpack, and Jest.

## Structure

- `src/app.ts`: main file of the app that loads and configures all dependencies and kickstarts the parent Vue component
- `src/routes.ts`: configuration of routes (`route`: binding a `component` to a certain `path`)
- `src/App.vue`: basic app skeleton with header/nav, body, and footer
- `src/common/`: directory for shared functionality that is not specific to a certain Vue or domain concept
- `src/views/`: directory for all Vues; should be structured according to domain concepts
- `src/config/index.ts`: configuration file with app or environment specific properties
- `test/`: directory for all tests

## Build Setup

``` bash
# install dependencies
npm install

# serve locally with hot reload (localhost:9000, adjustable in webpack.dev.config.js)
npm start

# build for production with minification
npm run build

# run TypeScript linter
npm run lint

# run tests and create coverage reports
npm test

# run SonarQube analysis (configure sonar-project.properties first or pass parameters to choose the SonarQube instance)
npm run sonar
```

## Useful VSCode Extensions

- Vetur (helps with Vue SFCs)
- TSLint (enforces coding rules in `tslint.json`)
- Prettier (formats Vue files)
- EditorConfig (enforces code formatting in `.editorconfig`)

## VSCode Settings

```json
{
    "editor.formatOnSave": true,
    "prettier.disableLanguages": [
        "markdown"
    ],
    "tslint.alwaysShowRuleFailuresAsWarnings": true,
    "tslint.autoFixOnSave": true,
    "vetur.format.defaultFormatter.html": "js-beautify-html"
}
```
