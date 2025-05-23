// Import the Recipe type so TypeScript knows what shape our test data should be
import type { Recipe } from '../types/Recipe';

// Sample recipes to start with. Used to initialize app state.
export const testData: Recipe[] = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: ['Spaghetti', 'Tomato Sauce', 'Ground Beef'],
    instructions: 'Boil pasta, cook beef, mix with sauce.',
    favorite: false,
  },
  {
    id: 2,
    name: 'Grilled Cheese Sandwich',
    ingredients: ['Bread', 'Cheese', 'Butter'],
    instructions: 'Butter bread, place cheese, grill it.',
    favorite: true,
  },
];
