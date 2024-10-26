// tailwind.config.js
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust to match your file paths
  theme: {
    extend: {
      fontFamily: {
        varta: ['Varta', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
