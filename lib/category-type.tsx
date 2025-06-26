export type CategoryType = {
    id: number,
    name: string,
    duration: string,
    imageUrl: string,
}

export const CATEGORIES: CategoryType[] = [
  {
    id: 0, name: 'Sales Marketing', duration: '4 months', imageUrl: 'categories_01.jpg',
  },
  {
    id: 1, name: 'Data Analytics', duration: '3 months', imageUrl: 'categories_02.jpg',
  },
  {
    id: 2, name: 'Copyrighting Pro', duration: '2 months', imageUrl: 'categories_03.jpg',
  },
  {
    id: 3, name: 'Design Art', duration: '4 months', imageUrl: 'categories_04.jpg',
  },
];
