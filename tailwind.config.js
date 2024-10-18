/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './node_modules/@radix-ui/react-*',  // Include Radix components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),  // Form plugin for better styling
  ],
}
