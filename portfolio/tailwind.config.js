/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F9FAFB',
        text: {
          primary: '#0F172A',
          secondary: '#475569',
        },
        accent: '#2563EB',
        border: '#E2E8F0'
      },
      fontFamily: {
        heading: ['Inter', 'San Francisco', 'sans-serif'],
        body: ['Inter', 'San Francisco', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'watermark-pattern': "url('/watermark.svg')",
      }
    },
  },
  plugins: [],
}
