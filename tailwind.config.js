module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,html}'],
   theme: {
    screens: {
      '3xsm': "395px",
      '2xsm': "479px",
      'xsm': "580px",
      'sm': "640px",
      'md': "768px",
      'mdlg' : "960px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px"
    },
    extend: {
      fontSize: {
        '11xl': '12rem',
        '99xl': '12rem',
  
       },
      colors: {
        primary: '#d46b53',
        secondary: '#262626',
        secondaryOpacity: '#141414fa',
        white: '#ffffff',
        black: '#000000',
        whiteOpacity: '#fffffff5',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      },
      spacing: {
        '550': '31.875rem',
        '600': '37.5rem',
      }
    },
  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [],
};
