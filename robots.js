export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/'],
            },
        ],
        sitemap: 'https://navoz18.ru/sitemap.xml',
    }
}
