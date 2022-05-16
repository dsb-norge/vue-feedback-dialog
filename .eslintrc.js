module.exports = {
  root: true,
  env: {
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    '@dsb-norge/dsb-vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}