* This app was created, designed and manipulated with the help of AI

"PT-W16-coding-assignment"
# Description/Assignment Instructions
For this project we're going to build a CRUD app using React. In this project, we won’t connect to an API. We’ll get there soon! You’ll work on this project over the course of three weeks.

## Week 16
This week you’ll add a form (or forms, if you’d like) to your app. A create form and/or an update form.

## Task 1: Make a form
At this point, users should be able to create new items, but those items always have the same data. And they should be able to update items, but only in a very simple way.

Now we want to build a form for the app that allows the user to either create or update items with specific data.

The form can be in a modal or collapsible sidebar, or it can just be always visible in the app.

Warning: Making an update form that’s always visible can get a little tricky, because you have to update the in-progress form state to match the data of the item you’re editing when you pick an item to edit. If you’d like to try it, you may need to do some research into how to handle it correctly. Making an update form in a modal usually works much nicer, because the insides of the modal get torn down and recreated every time the modal is opened.

## Task 2: Test
Make sure your app is working correctly by testing out the form in various ways. Make sure you can use the form multiple times to create or update different items.

At this point, your project must meet this new requirement:

It has either a create form or an update form with at least 2 inputs

As well as the requirements from previous weeks:

It has at least 3 React components

It’s displaying the data

It’s using at least 1 prop

A user can create new items

A user can delete items

A user can update at least one property on the items

* The app does NOT need to connect to an API. So when the page is refreshed, all the changes will be lost. That’s not a problem, we’ll learn how to save to a backend soon. 

# 🍽️ Recipe Manager (React + TypeScript)

This project is a simple **Recipe Manager CRUD app** built using **React** and **TypeScript**. It allows users to:

- View a list of recipes
- Create new recipes using a form
- Edit existing recipes
- Delete recipes
- Mark recipes as favorites

> ⚠️ This app does **not** connect to a backend or save data between page reloads. All data is stored in memory (state only).

---

## 🚀 Features

✅ Display a list of recipes  
✅ Create new recipes using a form  
✅ Update/edit recipes with the form  
✅ Delete recipes  
✅ Toggle "Favorite" on recipes  
✅ Uses Bootstrap for styling  
✅ Uses TypeScript for strong typing and safety  

---

## 📂 File Structure
src/
├── App.tsx # Main app logic and state
├── main.tsx # Entry point
├── components/
│ ├── Header.tsx # Hero banner/header
│ ├── RecipeCard.tsx # Individual recipe UI
│ ├── RecipeForm.tsx # Form for creating/updating
│ └── RecipeList.tsx # Displays list of recipes
├── data/
│ └── testData.ts # Initial static test data
├── types/
│ └── Recipe.ts # Recipe type definition
└── index.css # Optional custom styles


---

## 🧪 How to Test It

1. **Create a Recipe**  
   Use the form to add a new recipe with a name, ingredients, and instructions.

2. **Edit a Recipe**  
   Click the "Edit" button on any recipe card to modify its content using the form.

3. **Delete a Recipe**  
   Use the "Delete" button to remove a recipe from the list.

4. **Toggle Favorite**  
   Click "Toggle Favorite" to switch whether a recipe is marked as a favorite.

5. **Data Persistence**  
   Refreshing the page will reset the app to the original test data (as no backend is connected yet).

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
### 2. Run the App
npm run dev
The app should open at http://localhost:5173/ or similar depending on your setup.

✅ Requirements Met
This app meets the project requirements:

 At least 3 React components

 Displaying test data

 Using props

 Create new items (with dynamic form)

 Delete items

 Update at least one property

 Includes a form with 2+ inputs

📚 Tools Used
React

TypeScript

Bootstrap 5

Vite (for development server and build tooling)

🔒 Disclaimer
This app uses only local state. Changes will be lost when you reload the page. API/backend integration will come in future lessons.