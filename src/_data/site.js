const environmentSpecificVariables = {
  development: {
    // TODO: don't hardcode port
    url: 'http://localhost:4001',
  },
  production: {
    url: 'https://www.senthilnayagan.net',
  },
};

module.exports = {
  name: 'SenthilNayagan.net',
  title: 'Senthil Nayagan',
  author: 'Senthil Nayagan',
  authorGravatar: 'https://www.gravatar.com/avatar/6fc127cda8cd99830932538a58dc6173?s=300&d=mm&r=x',
  description: 'A blog covers personal thoughts, design and coding principles, AI, and a variety of topics.',
  keywords: ['Senthil Nayagan'],
  lang: 'en-US',
  issues: {
    owner: `SenthilNayagan`,
    repo: `senthilnayagan.net`,
  },
  pagination: {
    itemsPerPage: 30,
  },
  cookieConsentMessage:
    'This site uses cookies to understand the number of visitors and which posts they read the most through Google Analytics. If you consent to this, please click "I Agree." If not, click "I Disagree." For more details, please refer to the <a href="/privacyPolicy/#cookies" target="_blank">Cookie Policy</a>.',
  email: 'hello@senthilnayagan.net',
  contactMe: 'https://formspree.io/f/mdoqkzjn',
  disqus: 'senthilnayagan',
  mailchimpSubscription: 'https://gmail.us17.list-manage.com/subscribe?u=155954fdd35cc37fcbfab134a&id=acc42a78d4',
  mastodon: 'https://fosstodon.org/@SenthilNayagan',
  twitter: 'https://twitter.com/SenthilNayagan',
  instagram: 'https://www.instagram.com/senthilnayagan',
  linkedIn: 'https://www.linkedin.com/in/senthilnayagan',
  gitHub: 'https://github.com/SenthilNayagan',
  ...environmentSpecificVariables[process.env.ELEVENTY_ENV],
};
