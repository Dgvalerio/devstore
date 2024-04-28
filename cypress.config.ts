import { defineConfig } from 'cypress';

// eslint-disable-next-line no-restricted-syntax
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
