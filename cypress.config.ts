import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://github.com',  // base URL for your tests
        supportFile:false,
        specPattern: './e2e/**/*.cy.{js,jsx,ts,tsx}',  // test file pattern
    },
});
