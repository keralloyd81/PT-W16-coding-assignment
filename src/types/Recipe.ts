// This file defines the TypeScript type for a recipe.
// This helps us catch errors early and makes the code easier to understand.

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  favorite?: boolean;
};
