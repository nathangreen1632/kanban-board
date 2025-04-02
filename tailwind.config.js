// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["'Inter Tight'", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
}
