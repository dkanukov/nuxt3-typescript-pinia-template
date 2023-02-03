// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true,
    },
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    // automatically imports `defineStore` as `definePiniaStore`
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
    ],
    components: [
        {
            path: '~/components',
            extensions: ['.tsx'],
            pathPrefix: false,
        }
    ],
})
