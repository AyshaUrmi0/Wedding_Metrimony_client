import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel Decorative', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'custom-pink': '#e11d48',
        'custom-orange': '#b45309',
      },
    },
  },
  plugins: [],
});