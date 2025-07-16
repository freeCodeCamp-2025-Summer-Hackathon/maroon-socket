/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            },
            colors: {
                primary: '#3A6B3D',
                secondary: '#F7FBF7'

            }
        }
    },
    plugins: []
};
