module.exports = (plop) => {
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
          templateFile: 'component/index.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{dashCase name}}/{{dashCase name}}.tsx',
          templateFile: 'component/tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{dashCase name}}/{{dashCase name}}.test.js',
          templateFile: 'component/test.js.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{dashCase name}}/{{dashCase name}}.stories.js',
          templateFile: 'component/stories.js.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{dashCase name}}/styles.js',
          templateFile: 'component/styles.js.hbs',
        },
      ],
    });

    plop.setGenerator('template', {
        description: 'Create a template',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'What is your template name?',
          },
        ],
        actions: [
          {
            type: 'add',
            path: '../src/templates/{{dashCase name}}/index.js',
            templateFile: 'template/index.ts.hbs',
          },
          {
            type: 'add',
            path: '../src/templates/{{dashCase name}}/{{dashCase name}}.tsx',
            templateFile: 'template/tsx.hbs',
          },
          {
            type: 'add',
            path: '../src/templates/{{dashCase name}}/{{dashCase name}}.test.js',
            templateFile: 'template/test.js.hbs',
          },
          {
            type: 'add',
            path: '../src/templates/{{dashCase name}}/{{dashCase name}}.stories.js',
            templateFile: 'template/stories.js.hbs',
          },
          {
            type: 'add',
            path: '../src/templates/{{dashCase name}}/styles.js',
            templateFile: 'template/styles.js.hbs',
          },
        ],
      });

    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?',
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../pages/{{dashCase name}}.tsx',
          templateFile: 'page/tsx.hbs',
        }
      ],
    });
  };