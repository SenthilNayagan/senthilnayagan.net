const path = require('path');
const { toAbsoluteImageUrl } = require('../../config/filters/filters');
const featureFlags = require('../_data/featureFlags');

module.exports = {
  layout: 'post',
  // permalink: (data) => `/blog/tech/${data?.page?.fileSlug}/`,
  permalink: (data) => {
    const type = data?.type || 'tech';
    let prefix;

    if (type === 'tech') {
      prefix = 'blog/tech';
    } else if (type === 'personal') {
      prefix = 'blog/personal';
    } else {
      prefix = 'blog';
    }

    return `/${prefix}/${data?.page?.fileSlug}/`;
  },
  isPost: true,
  eleventyComputed: {
    scripts: (data) => {
      // If the post has comments and comments are enabled, link to the comment script to load them
      if (featureFlags.enableComments && data.commentsId) {
        return [...data.scripts, { type: 'module', src: `/assets/scripts/comments.mjs` }];
      }
      // Otherwise, return the existing scripts
      return data.scripts;
    },
    openGraph: {
      type: 'article',
      // For social sharing. Used in og:image and twitter:image. Absolute path to the post's thumbnail image.
      // Thumbnails may be remote images (thumbnail.url) or local images (thumbnail as a string path, like ./images/thumbnail.png).
      image: async (data) => {
        // TODO: add a fallback social preview image
        if (!data.thumbnail) {
          return;
        }
        // inputPath will look like src/_posts/yyyy-mm-dd-slug/ for a post located under src/_posts/yyyy-mm-dd-slug/index.md
        const { dir: imgDir } = path.parse(data.page.inputPath);
        // either a full URL for remote images or src/_posts/yyyy-mm-dd-slug/images/name.extension for local images
        let src;
        if (data.thumbnail.match(/^https?:\/\//)) {
          src = data.thumbnail;
        } else {
          src = path.join(imgDir, data.thumbnail);
        }
        // for remote images, just the URL; else, a root-relative path to the image (as seen in the img tag's src)
        return toAbsoluteImageUrl(src);
      },
    },
  },
};
