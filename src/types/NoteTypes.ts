export type Category = 'Work and Study' | 'Life' | 'Health and Well-being';

export interface Note {
  id: string;
  category: Category;
  content: string;
  createdAt: number;
}

export const CATEGORIES: Category[] = [
  'Work and Study',
  'Life',
  'Health and Well-being',
]; 