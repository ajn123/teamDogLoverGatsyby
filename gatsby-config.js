module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.teamdoglover.com',
    title: "Team Dog Lover",
    description:
      "This is the website for Team Dog Lover.  Providing Dog Walking Services in Virginia, Washington DC, and Maryland.  We are looking for dog walkers and potential clients.",
  },
  plugins: [
  {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-221551513-1",
        head: true,
        anonymize: true,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    'gatsby-plugin-robots-txt',
// {
//       resolve: `gatsby-plugin-google-gtag`,
//       options: {
//         // You can add multiple tracking ids and a pageview event will be fired for all of them.
//         trackingIds: [
//           "UA-221551513-1", // Google Analytics / GA
//          ],
//         // // This object gets passed directly to the gtag config command
//         // // This config will be shared across all trackingIds
//         gtagConfig: {
//           optimize_id: "OPT-WFV5DMB",
//           anonymize_ip: true,
//           cookie_expires: 0,
//         },
//         // This object is used for configuration specific to this plugin
//         pluginConfig: {
//           // Puts tracking script in the head instead of the body
//           head: true,
//           // Setting this parameter is also optional
//           respectDNT: true,
//           // Avoids sending pageview hits from custom paths
//           exclude: ["/preview/**", "/do-not-track/me/too/"],
//           // Defaults to https://www.googletagmanager.com
//           origin: "teamdoglover.com",
//         },
//       },
//     },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
