import RecipeCard from './RecipeCard';
import type { Recipe } from '../types/Recipe';

type Props = {
  recipes: Recipe[];
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onEdit: (recipe: Recipe) => void;
};

const RecipeList = ({ recipes, onDelete, onToggleFavorite, onEdit }: Props) => {
  return (
    <div className="container mt-4">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default RecipeList;
