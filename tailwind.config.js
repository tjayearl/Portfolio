/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16130f',
        'ink-deep': '#0d0b08',
        parchment: {
          DEFAULT: '#ede0c4',
          dim: '#c9b78e',
        },
        gold: {
          DEFAULT: '#b8933d',
          bright: '#d4af5a',
        },
        rubric: '#8c2f2f',
        verdigris: '#4f6b5c',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};