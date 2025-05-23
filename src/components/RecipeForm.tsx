import { useState, useEffect } from 'react';
import type { Recipe } from '../types/Recipe';

type Props = {
  onSubmit: (recipe: Recipe) => void;
  initialData?: Recipe;
};

const RecipeForm = ({ onSubmit, initialData }: Props) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // If editing, populate form with existing data
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setIngredients(initialData.ingredients.join(', '));
      setInstructions(initialData.instructions);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipe: Recipe = {
      id: initialData?.id || Date.now(), // Use existing ID or generate a new one
      name,
      ingredients: ingredients.split(',').map(i => i.trim()),
      instructions,
      favorite: initialData?.favorite || false,
    };

    onSubmit(recipe);

    // Clear form if creating a new recipe
    if (!initialData) {
      setName('');
      setIngredients('');
      setInstructions('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h3>{initialData ? 'Edit Recipe' : 'Add a New Recipe'}</h3>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Ingredients (comma-separated)</label>
        <input type="text" className="form-control" value={ingredients} onChange={e => setIngredients(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Instructions</label>
        <textarea className="form-control" value={instructions} onChange={e => setInstructions(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">{initialData ? 'Update Recipe' : 'Add Recipe'}</button>
    </form>
  );
};

export default RecipeForm;
