# Ayenda Frontend Test

## Features

Project done with Nextjs + React environment, where our ui components are mostly based on Chakra ui.

## Tech

Front-end architecture based on the following stack:

- [React] - **V17.0.2**
- [NextJS] - **V11.1.2**
- [Chakra ui] - **V1.8.6**

## Getting Started

### Requirements

1.  Install the dependencies and devDependencies:

```sh
  npm i
```

> Only `npm` is allowed in order to standardise all node installs, please use [NVM] to manage node versions.

2.  Change example.env.local to .env.local

3.  Install the dependencies and devDependencies:

```sh
  npm i
```

> Only `npm` is allowed in order to standardise all node installs, please use [NVM] to manage node versions.

> This command will both build and start the server in dev mode.

## Building and deploying

For production release:

```sh
  npm run build
```

## Development Standards.

- **Chakra ui handling**
  Chakra ui library comes with a lot of components ready to use with our minimum input, it's usage will be a combination of extending it's components functionality and then using our own ones based on chakra since it covers important features like a11y.

  Some extra rules we may follow:

  - When overwriting the styling of the base components the idea es to use the `styles` folder and then add the component you want to change as a file, finally import them in `styles/theme.js` see [scaling your project] reference for more info.

  - Some components may require a lot of style props for this reason you should have them set in an separate function scoped object and organize them in alphabetical order so it's easy to maintain.

  - When handling **style props** there are two options, to use a shorthand or to have the full name which is always the same property in css but in this case is camel case, ie: if you want to set the max height of an element instead of the shorthand `maxH` please use `maxHeight`, the idea of this is to keep it as close as the css property so there is a short learning curve for incoming members.

  - Try to use as much as possible the Chakra ui components, there is always a component for almost everything.

  - Responsive props can be handled both as an array of values or as an object of key values representing the viewport target you want to aim. The recommended approach is to go for the key value object ie: instead of doing this `marginTop={[133, null, null, null, null, 194]}` got for this `marginTop={{ base: 133, xl: 194 }}`

- **Storybook**
  [Storybook] should be use for colors, typography and atomic components like buttons. The location of this Storybook files should be at the component root level.

- **Creating new components and views**
  Whenever you need to create a new component you can use the following command: `npm run generate` this will create a folder with it's respective structure.
  The folder/file generator library used to achieve this is [Plopjs].

- **Aliases implementation**
  For adding an alias, you just need to go to the `tsconfig.json` file and under the paths object add another route. For example the components route alias is `"@components/*": ["src/components/*"]` and so on. Also you have to add the route to the `.eslintrc.js` file inside the `settings { -> alias { -> map [` object.

- **Testing**
  The testing approach will complain to the following standars:

  - Use [React Testing Library], it has helpful queries which lets you access your component's elements and their properties.
  - Use the test definition because it helps with this: [Avoid Nesting When You are Testing].

  Not sure what and how to test?, look at this [React Testing Library examples].

[chakra ui]: https://chakra-ui.com/
[gitflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/
[husky]: https://github.com/typicode/husky/
[nextjs]: https://nextjs.org/
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/nvm-sh/nvm
[plop.js generators]: https://plopjs.com/documentation/
[plopjs]: https://plopjs.com/
[react testing library examples]: https://react-testing-examples.com/jest-rtl/
[react testing library]: https://testing-library.com/
[react]: https://reactjs.org/
[scaling your project]: https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
[storybook]: https://storybook.js.org/
[typescript]: https://www.typescriptlang.org/
