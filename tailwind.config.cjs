/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],
};

module.exports = {
  content: [
    './src/**/*. {html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*. {html,js,svelte,ts}'
  ],
  plugins: [require('flowbite/plugin')]
};
