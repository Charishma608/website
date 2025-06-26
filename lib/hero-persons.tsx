export type HeroPersonType = {
    id: number,
    title: string,
    category: string,
    numberOfTopics: number,
    imageUrl: string,
    imageAlt: string,
}

export const HERO_PERSONS: HeroPersonType[] = [
  {
    id: 0,
    title: 'Writing Course',
    category: 'Writing',
    imageUrl: '/hero_person-1.jpg',
    imageAlt: '',
    numberOfTopics: 100,
  },
  {
    id: 1,
    title: 'Writing Course',
    category: 'Writing',
    imageUrl: '/hero_person-2.jpg',
    imageAlt: '',
    numberOfTopics: 100,
  },
  {
    id: 2,
    title: 'Business Course',
    category: 'Business',
    imageUrl: '/hero_person-3.jpg',
    imageAlt: '',
    numberOfTopics: 100,
  },
];
