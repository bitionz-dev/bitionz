module.exports = {
    prefix: 'tw-', content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",], theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                },
            }, colors: {
                'violet': {
                    900: '#0C0F23'
                },
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
            }, fontFamily: {
                sans: ['Alata', 'sans-serif'], serif: ['Merriweather', 'serif'],
            },
        },
    }, plugins: [],
}
