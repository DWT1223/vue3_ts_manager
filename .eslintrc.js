module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  // files: ['src/views/**/*.vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-irregular-whitespace': 'off',
    'vue/no-mutating-props': 'off',
    'eslint-disable-next-line vue/multi-word-component-names': 'off',
    'vue/multi-word-component-names': 'off'
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 'vue/custom-event-name-casing': 'off',
    // 'vue/attributes-order': 'off',
    // 'vue/one-component-per-file': 'off',
    // 'vue/html-closing-bracket-newline': 'off',
    // 'vue/max-attributes-per-line': 'off',
    // 'vue/multiline-html-element-content-newline': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    // 'vue/attribute-hyphenation': 'off',
    // 'vue/html-self-closing': 'off',
    // 'vue/no-multiple-template-root': 'off',
    // 'vue/require-default-prop': 'off',
    // 'vue/no-v-model-argument': 'off',
    // 'vue/no-arrow-functions-in-watch': 'off',
    // 'vue/no-template-key': 'off',
    // 'vue/no-v-html': 'off',
    // 'vue/comment-directive': 'off',
    // 'vue/no-parsing-error': 'off',
    // 'vue/no-deprecated-v-on-native-modifier': 'off',
    // 'vue/multi-word-component-names': 'off',
    // 'no-useless-escape': 'off',
    // 'no-sparse-arrays': 'off',
    // 'no-prototype-builtins': 'off',
    // 'no-constant-condition': 'off',
    // 'no-use-before-define': 'off',
    // 'no-restricted-globals': 'off',
    // 'no-restricted-syntax': 'off',
    // 'generator-star-spacing': 'off',
    // 'no-unreachable': 'off',
    // 'no-multiple-template-root': 'off',
    // 'no-unused-vars': 'error',
    // 'no-v-model-argument': 'off',
    // 'no-case-declarations': 'off',
    // 'no-console': 'off',
    // 'vue/no-v-for-template-key': 'off',
  }
}
