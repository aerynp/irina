import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    port: 3030,
    baseUrl: 'http://localhost:3030',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
