/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 1, transform: 'scale(0.85)' },
                    '100%': { opacity: 1, transform: 'scale(1)' }
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            },
            colors: {
                primary: '#3A6B3D',
                secondary: '#F7FBF7',
                btn: '#29423E'
            }
        }
    },
    plugins: []
};
