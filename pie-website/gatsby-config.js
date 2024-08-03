/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Pioneers in Engineering",
    description:
      "Pioneers in Engineering (PiE) promotes STEM education through an exciting, mentorship-based process. We strongly believe that no student should be denied a quality educational experience.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/gallery-photos`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xsq697r2ly56`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "eYFMOEhXA-gGlLbTlKvyAgZUn2P-jlYTavBcdamV2vw",
      },
    },
  ],
}
