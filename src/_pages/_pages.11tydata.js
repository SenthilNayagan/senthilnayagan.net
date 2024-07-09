const { toAbsoluteImageUrl } = require('../../config/filters/filters');

module.exports = {
  layout: 'default',
  openGraph: {
    type: 'website',
    image: toAbsoluteImageUrl('src/assets/images/logo/profile.png', 400),
  },
};
