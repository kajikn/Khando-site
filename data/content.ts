export type Card = {
  title: string;
  date?: string;
  excerpt: string;
  href: string;
};

export const latestNews: Card[] = [
  {
    title: 'Գյուղի նորություն',
    date: '2025-12-22',
    excerpt: 'Կարճ նախադասություն՝ 2–3 տողով, որպեսզի արագ ընթերցվի։',
    href: '/gjughi-kyanq#norutyunner',
  },
];

export const upcomingEvents: Card[] = [
  {
    title: 'Մոտակա միջոցառում',
    date: '2026-01-05',
    excerpt: 'Ժամ, տեղ, և փոքր նկարագրություն։',
    href: '/gjughi-kyanq#mijocarumner',
  },
];

export const quickBlocks: Card[] = [
  {
    title: '🗞 Գյուղի նորություն',
    excerpt: '2–3 տողով ամփոփում + «Կարդալ ավելին»։',
    href: '/gjughi-kyanq#norutyunner',
  },
  {
    title: '📅 Մոտակա միջոցառում',
    excerpt: 'Տոն/հանդիպում/եկեղեցական օր…',
    href: '/gjughi-kyanq#mijocarumner',
  },
  {
    title: '🏗 Արվում է գյուղում',
    excerpt: 'Համայնքային աշխատանքներ, շինարարություն, վերանորոգումներ…',
    href: '/gjughi-kyanq#ashxatanqner',
  },
  {
    title: '🏫 Դպրոցից լուրեր',
    excerpt: 'Նորություններ դպրոցից, ձեռքբերումներ…',
    href: '/dproc#norutyunner',
  },
];
