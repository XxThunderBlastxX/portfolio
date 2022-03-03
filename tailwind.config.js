module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            "Collonse": ["Collonse", "ui-sans-serif"],
            "NovoMono": ["NovaMono", "ui-sans-serif"]
        },
        extend: {
            backgroundImage: {
                'l-1': "url('/public/images/parallax/l-1.png')",
            },
            spacing: {
                '200': '2048px',
            }
        },
    },
    plugins: [],
}
