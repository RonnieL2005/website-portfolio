// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'danfo': ['Danfo', 'sans-serif'],
        'sans': ['Darker Grotesque', 'sans-serif'],
        'mono': ['Major Mono Display', 'monospace'],
      },
    },
  },
  plugins: [],
};
