/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00508F",
        accent: "#F26522",
        gold: "#FFC20E",
        teal: "#008C95",
        dark: "#0f172a",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        slideDown: "slideDown 0.4s ease-out",
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
        glow: "glow 3s ease-in-out infinite",
        spinSlow: "spinSlow 10s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 80, 143, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 80, 143, 0.6)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backdropFilter: {
        none: "none",
        sm: "blur(4px)",
        md: "blur(12px)",
        lg: "blur(16px)",
      },
    },
  },
  plugins: [],
};
