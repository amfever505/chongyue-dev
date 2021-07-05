module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '428px',
      // => @media (min-width: 428px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1366px',
      // => @media (min-width: 1366px) { ... }

      xl: '1680px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Fira Sans', 'Shippori Mincho', 'sans-serif'],
    },
    fontSize: {
      xs: '.6rem',
      sm: '.8rem',
      tiny: '.9rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.6rem',
      '3xl': '1.8rem',
      '4xl': '2rem',
      '5xl': '2.2rem',
      '6xl': '2.4rem',
      '7xl': '2.6rem',
      '8xl': '2.8rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1d1d1d',
      white: '#fff',
      gray: {
        700: '#484848',
      },
    },
    extend: {
      spacing: {
        13: '3.3rem',
        25: '6.25rem',
        '1/2img': '52%',
        '3/4img': '75%',
        '1/1img': '100%',
      },
      lineHeight: {
        footer: '10rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
