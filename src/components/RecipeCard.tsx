import type { Recipe } from '../types/Recipe';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onEdit: (recipe: Recipe) => void;
};

const RecipeCard = ({ recipe, onDelete, onToggleFavorite, onEdit }: Props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4 className="card-title">{recipe.name}</h4>
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>
        <p>
          <strong>Favorite:</strong> {recipe.favorite ? 'Yes' : 'No'}
        </p>
        <button className="btn btn-danger me-2" onClick={() => onDelete(recipe.id)}>Delete</button>
        <button className="btn btn-warning me-2" onClick={() => onToggleFavorite(recipe.id)}>Toggle Favorite</button>
        <button className="btn btn-info" onClick={() => onEdit(recipe)}>Edit</button>
      </div>
    </div>
  );
};

export default RecipeCard;
