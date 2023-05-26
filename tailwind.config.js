/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                navy: '#0a192f',
                'opaque-navy': 'rgba(10, 25, 47, 0.75)',
                'navy-shadow': 'rgba(2,12,27,0.7)',
                'light-navy': '#112240',
                'deep-blue': '#010026',
                'dark-grey': '#757575',
                'opaque-black': 'rgba(0,0,0,0.75)',
            },
            backgroundImage: (theme) => ({
                'gradient-rainbow':
                    'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

                'gradient-rainblue':
                    'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',

                'gradient-gunmetal':
                    'linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))',

                'gradient-oceanic':
                    'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',

                'gradient-bluecoral':
                    'linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))',
                'gradient-space':
                    'linear-gradient(to right, #000000, #434343);',
                'gradient-dw': 'linear-gradient(to right, #74ebd5, #acb6e5)',
                'gradient-quepal':
                    'linear-gradient(to right, #348f50, #56b4d3)',
                'gradient-moss': 'linear-gradient(to right, #1d976c, #93f9b9)',
            }),
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                opensans: ['Open Sans', 'sans-serif'],
            },
            content: {},
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
