module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.js',
        templateFile: 'component-index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.tsx',
        templateFile: 'component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.test.js',
        templateFile: 'component.test.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'component.stories.js.hbs',
      },
    ],
  });
};
