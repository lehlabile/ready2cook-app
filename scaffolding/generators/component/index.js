/**
 * Component Generator
 */
/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Create a new component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component  with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "wantStyledComp",
      default: true,
      message: "Do you want this to be a styled component?",
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const componentTemplate = "./component/functionComponent.js.hbs";
    const styledComponentTemplate = "./component/styledComponent.js.hbs";

    const actions = [
      {
        type: "add",
        path: "../../src/components/{{properCase name}}/index.tsx",
        templateFile: componentTemplate,
        skipIfExists: true,
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/components/{{properCase name}}/__tests__/{{camelCase name}}.test.js",
        templateFile: "./component/test.js.hbs",
        skipIfExists: true,
        abortOnFail: true,
      },
    ];

    // If they want a styled component
    if (data.wantStyledComp) {
      actions.push({
        type: "add",
        path: "../../src/components/{{properCase name}}/styledComponents/index.ts",
        templateFile: styledComponentTemplate,
        skipIfExists: true,
        abortOnFail: true,
      });
    }

    actions.push({
      type: "prettify",
      path: "/src/components/",
    });

    return actions;
  },
};
