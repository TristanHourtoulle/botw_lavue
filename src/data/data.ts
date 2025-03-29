export interface FooterNavType {
  title: string;
  content: {
    title: string;
    href: string;
  }[];
}

export const footerNav: FooterNavType[] = [
  {
    title: 'pages',
    content: [
      {
        title: 'nouveautés',
        href: '#',
      },
      {
        title: 'collection',
        href: '#',
      },
      {
        title: 'journal',
        href: '#',
      },
      {
        title: "l'univers",
        href: '#',
      },
    ],
  },
  {
    title: 'réseaux',
    content: [
      {
        title: 'instagram',
        href: '#',
      },
      {
        title: 'tiktok',
        href: '#',
      },
      {
        title: 'linkedin',
        href: '#',
      },
      {
        title: 'pinterest',
        href: '#',
      },
    ],
  },
  {
    title: 'légal',
    content: [
      {
        title: 'cgv',
        href: '#',
      },
      {
        title: 'cdu',
        href: '#',
      },
      {
        title: 'cookies',
        href: '#',
      },
      {
        title: 'termes',
        href: '#',
      },
    ],
  },
];
