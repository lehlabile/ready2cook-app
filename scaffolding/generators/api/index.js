/**
 * Container Generator
 */

module.exports = {
  description: "Create a new api",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "auth",
      validate: (value) => {
        if (/.+/.test(value)) {
          return true;
        }

        return "The name is required";
      },
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const componentTemplate = "./api/api.hbs"; // eslint-disable-line no-var

    const actions = [
      {
        type: "add",
        path: "../../src/api/{{camelCase name}}/index.ts",
        templateFile: componentTemplate,
        skipIfExists: true,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: "prettify",
      path: "/src/api/",
    });

    return actions;
  },
};
