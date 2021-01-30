const {colors } = require("tailwindcss/defaultTheme")

module.exports = {
    purge: {
        preserveHtmlElements: false,
        content: ['src/**/*.[j|t]s[x]', 'blog/**/*.[j|t]s[x]']
    },
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                ...colors,
                preload: {
                    DEFAULT: '#f3f4f6',
                    dark: '#313131'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
