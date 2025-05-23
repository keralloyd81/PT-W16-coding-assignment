import { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import { testData } from './data/testData';
import type { Recipe } from './types/Recipe';

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(testData);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | undefined>(undefined);

  const addOrUpdateRecipe = (newRecipe: Recipe) => {
    setRecipes(prev =>
      prev.some(r => r.id === newRecipe.id)
        ? prev.map(r => (r.id === newRecipe.id ? newRecipe : r))
        : [...prev, newRecipe]
    );
    setEditingRecipe(undefined); // Clear edit mode after submit
  };

  const deleteRecipe = (id: number) => {
    setRecipes(prev => prev.filter(recipe => recipe.id !== id));
  };

  const toggleFavorite = (id: number) => {
    setRecipes(prev =>
      prev.map(recipe =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  const editRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
  };

  return (
    <div>
      <Header />
      <RecipeForm onSubmit={addOrUpdateRecipe} initialData={editingRecipe} />
      <RecipeList
        recipes={recipes}
        onDelete={deleteRecipe}
        onToggleFavorite={toggleFavorite}
        onEdit={editRecipe}
      />
    </div>
  );
};

export default App;
