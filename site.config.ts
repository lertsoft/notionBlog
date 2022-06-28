import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // https://costeronny.notion.site/Ronny-s-Mind-3914c9b0241c4d3e85e2ff448e014230
  rootNotionPageId: '3914c9b0241c4d3e85e2ff448e014230',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ronny mind',
  domain: 'https://blog.ronnycoste.com',
  author: 'Ronny Coste',
  // open graph metadata (optional)
  description: 'Personal Blog of Ronny ',

  // social usernames (optional)
  twitter: 'costeronny',
  github: 'lertsoft',
  linkedin: 'ronnycoste',
  instagram: 'costeronny',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://blog.ronnycoste.com/page-icon.png',
  defaultPageCover: 'https://blog.ronnycoste.com/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/bucketlist': '62c28041a66f4b9798c3a523a2368775',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // pageUrlAdditions: {
  //   '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  // },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [

    {
      title: 'Gallery',
      url: 'https://gallery.ronnycoste.com'
    },
    
    {
      title: 'Bucketlist',
      url: 'https://somethingchanged.me'
    },

    // {
    //     title: 'Bucketlist',
    //     pageId: '62c28041a66f4b9798c3a523a2368775'
    //   },
  ]
})
