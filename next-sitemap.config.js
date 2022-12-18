/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.WEBSITE_URL || 'https://kkupgrader.eu.org',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 7000,
}