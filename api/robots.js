export default function handler(req, res) {
    const robotsConfig = {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/about',
                    '/contacts',
                    '/products',
                ],
            },
        ],
        sitemap: 'https://navoz18.ru/sitemap.xml',
    };

    // Generate robots.txt content
    let content = '';

    for (const rule of robotsConfig.rules) {
        const userAgents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent];

        for (const agent of userAgents) {
            content += `User-agent: ${agent}\n`;

            if (rule.allow) {
                for (const path of rule.allow) {
                    content += `Allow: ${path}\n`;
                }
            }

            if (rule.disallow) {
                for (const path of rule.disallow) {
                    content += `Disallow: ${path}\n`;
                }
            }

            content += '\n';
        }
    }

    if (robotsConfig.sitemap) {
        content += `Sitemap: ${robotsConfig.sitemap}`;
    }

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(content.trim());
}
