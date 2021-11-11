module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: `#2F6BC1`,
      secodary: `#1E58AB`,
      contact: `#878787`,
      white: `#fff`,
      dark: `#000`,
    },
    fontFamily: {
      display: ['Changa', 'sans-serif'],
      body: ['Changa', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1140px',
      xl: '1520px',
    },
    
    fontSize: {
      'heading': '35px',
      'featureHead': '22px',
      'footer': '20px',
      'paragraph': '16px',
      'copyrights': '15px'
    },

    container: {
      center: true,
      padding: '15px',
    },

    zIndex: {
      'min': -1,
      'max': 99,
      'full-max': 999,
    }, 
    lineHeight: {
      'heading': '50px',
      'pargraph': '30px',
      'head': '21px',

    },
    width: {
      'full': '100%',
      'fit-content': 'fit-content',
      'half': '60%',
      'semi-half': '70%',
      'logo': '172.26px',
      'contact': '80px',
      'socail': '35px',
      'icon': '20px',
    },
    height: {
      'full': '100%',
      'half': '50%',
      'imgComponent': '375px',
      'logo': '60px' ,
      'contact': '80px',
      'socail': '35px',
      'icon': '20px',
    },
    borderRadius: {
      'circle': '50%',
      'btn': '100px',
      'video': '40px',
      'input': '25px'
    }

  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.ts',
    ]
  },
}
