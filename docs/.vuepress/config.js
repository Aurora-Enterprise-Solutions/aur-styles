const { description } = require('../../package')
const sidebar = require('./sidebar')
const VueExamplePlugin = require('vuepress-plugin-vue-example')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Aurora Styles',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css` }],
        ['link', { rel: 'icon', href: `/icons/icon-1024x1024.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#20324A' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'https://github.com/Aurora-Enterprise-Solutions/aur-styles.git',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        smoothScroll: true,
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Idioma',
                // label for this locale in the language dropdown
                label: 'Español',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Idiomas',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "Nuevo contenido disponible.",
                        buttonText: "Actualizar"
                    }
                },

                nav: [],
                sidebar: [
                    ...sidebar['es'],
                ],
            },
            '/en/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Languages',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },

                nav: [],
                sidebar: [
                    ...sidebar['en'],
                ],
            }
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/nprogress',
        '@xiaopanda/vuepress-plugin-code-copy',
        VueExamplePlugin({
            // You need to provide a directory that all the example .vue files will be stored.
            // You can use sub-directories to separate examples into categories.
            componentsPath: '/docs/.examples/'
        }),
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                popupComponent: 'SWUpdatePopup',
                updatePopup: {
                    '/': {
                        message: 'Hay nuevo contenido disponible.',
                        buttonText: 'Actualizar'
                    },
                    '/en/': {
                        message: 'New content is available.',
                        buttonText: 'Update'
                    }
                }
            }
        ]
    ],

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'es-ES', // this will be set as the lang attribute on <html>
            title: 'Aurora Styles',
            description: 'La guía de estilos de Aurora',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Aurora Styles',
            description: 'The Aurora styles guide',
        }
    }
}
