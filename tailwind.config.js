const colors = require('tailwindcss/colors')


module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lime: colors.lime,
                'light-blue': colors.lightBlue,
                cyan: colors.cyan,
            },
            boxShadow: {
                'offset-lime': '4px 4px lime',
                'offset-black': '4px 4px black',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}