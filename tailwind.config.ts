/** @type {import('tailwindcss').Config} */
export default {
  // This is the crucial part that tells Tailwind where your classes are!
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // The rest can remain empty for a default setup
  theme: {
    extend: {},
  },
  plugins: [],
};
