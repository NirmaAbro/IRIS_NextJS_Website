/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4285F4",
        "on-primary": "#E4EDFD", 
        "primary-container": "#022061",
        "on-primary-container": "#FFFFFF",
        "secondary": "#34A853",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#71E086",
        "on-secondary-container": "#007322",
        "gray-one": "#F4F4F4",
        "gray-two": "#D9D9D9",
        "gray-three": "#BFBFBF",
        "gray-four": "#A6A6A6",
        "gray-five": "#8C8C8C",
        "gray-six": "#404040",
        "error-one": "#BA1A1A",
        "error-two": "#FFDAD6",
        "error-three": "#410002",
        "green": "#14532d",
        "yellow": "#FFC107",
      },
      fontFamily: {
        font: "open sans"
      }
    },
  },
  plugins: [],
}

