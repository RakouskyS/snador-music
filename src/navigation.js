import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink(''),
    },
    {
      text: 'Ambient',
      href: getPermalink('/homes/ambient/ambient'),
    },
    // {
    //   text: 'Electronic Music',
    //   href: getPermalink('/homes/pages'),
    // },
    // {
    //   text: 'Contact',
    //   href: getPermalink('/homes/mobile-app'),
    // },
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'mdi:soundcloud', href: 'https://soundcloud.com/snador' },
  ],
  footNote: `
    Still dancing · Snador 2023 © All rights reserved.
  `,
};
