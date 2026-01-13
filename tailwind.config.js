/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1"
        },
        offwhite: "#f8fafc",
        accent: {
          600: "#b03032",
          500: "#c5484a",
          100: "#f7eaea"
        }
      },
      fontFamily: {
        sans: ["Avenir Next", "Avenir", "Segoe UI", "Helvetica Neue", "sans-serif"],
        display: ["Optima", "Segoe UI", "Helvetica Neue", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.12)",
        card: "0 8px 20px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};
