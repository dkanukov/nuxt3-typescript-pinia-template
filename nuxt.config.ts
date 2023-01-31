// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true,
    },
    components: [
        {
            path: '~/components',
            extensions: ['.tsx'],
            pathPrefix: false,
        }
    ],
})
