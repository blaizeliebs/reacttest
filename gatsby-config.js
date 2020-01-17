module.exports = {
  siteMetadata: {
    title: 'GitHub repo search a Black Swan Data (FETHR) test',
    description: 'This little app searches the GitHub api for a given search term and allows you to view certain details for each repo.',
    author: 'Blaize Liebenberg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-fether-test',
        short_name: 'fether-test',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/fethr-icon.png', // This path is relative to the root of the site.
      },
    },
    'styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
