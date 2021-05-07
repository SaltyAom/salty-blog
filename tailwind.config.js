const {colors } = require("tailwindcss/defaultTheme")

module.exports = {
    mode: 'jit',
    purge: {
        preserveHtmlElements: false,
        content: ['src/**/*.[j|t]s[x]', 'blog/**/*.[j|t]s[x]']
    },
    darkMode: 'media',
    theme: {
        extend: {
            screens: {
                light: { raw: "(prefers-color-scheme: light)" },
                dark: { raw: "(prefers-color-scheme: dark)" }
            },
            colors: {
                ...colors,
                preload: {
                    DEFAULT: '#f3f4f6',
                    dark: '#313131'
                },
                system: {
                    DEFAULT: '#edf2f7',
                    dark: '#4a5568'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
