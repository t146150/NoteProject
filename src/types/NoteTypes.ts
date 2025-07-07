export const WORK_AND_STUDY = 'Work and Study'
export const LIFE = 'Life'
export const HEALTH_AND_WELLNESS = 'Health and Well-being'

export type Category = typeof WORK_AND_STUDY | typeof LIFE | typeof HEALTH_AND_WELLNESS;

export interface Note {
  id: string;
  category: Category;
  content: string;
  createdAt: number;
}

export const CATEGORIES: Category[] = [
  WORK_AND_STUDY,
  LIFE,
  HEALTH_AND_WELLNESS,
]; 