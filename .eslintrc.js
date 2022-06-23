const aliases = require('./aliases');

module.exports = {
  plugins: ['prettier', 'jest-dom', 'testing-library'],
  extends: [
    'react-app',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      'babel-module': {
        root: ['./src'],
        alias: aliases,
      },
    },
  },
  rules: {
    'no-console': 'off',
    'no-tabs': 'error',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'warn',

    'prettier/prettier': 'error',

    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',

    'react/no-unused-state': 'warn',
    'react/sort-comp': 'warn',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',

    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: `{${Object.keys(aliases).reduce((acc, alias) => `${alias},${alias}/**,${acc}`, '')}}`,
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-cycle': 'off',

    'jsx-a11y/anchor-is-valid': 'warn',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/consistent-data-testid': ['error', { testIdPattern: '^[a-z-]*$' }],
    'testing-library/no-debug': 'off',
    'testing-library/prefer-wait-for': 'error',
  },
};
