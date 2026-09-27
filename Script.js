// ===============================
// RECIPE WEBSITE - SCRIPT.JS
// ===============================

// Recipe data
const recipes = [
    {
        name: "Chicken Biryani",
        image: "images/chicken-biryani.jpg",
        ingredients: [
            "Chicken",
            "Basmati rice",
            "Onion",
            "Tomato",
            "Ginger garlic paste",
            "Biryani masala",
            "Oil",
            "Salt"
        ],
        instructions:
            "Marinate the chicken with spices and yogurt. Cook the chicken with onions and tomatoes. Add soaked basmati rice and water. Cook until the rice is completely done. Serve hot."
    },

    {
        name: "Chicken Fried Rice",
        image: "images/chicken-fried-rice.jpg",
        ingredients: [
            "Cooked rice",
            "Chicken",
            "Egg",
            "Carrot",
            "Beans",
            "Onion",
            "Soy sauce",
            "Salt"
        ],
        instructions:
            "Cook the chicken first. Add vegetables and stir-fry them. Add the egg and cooked rice. Add soy sauce and salt. Mix everything well and serve hot."
    },

    {
        name: "Chicken 65",
        image: "images/chicken-65.jpg",
        ingredients: [
            "Chicken",
            "Corn flour",
            "Rice flour",
            "Ginger garlic paste",
            "Red chilli powder",
            "Salt",
            "Oil"
        ],
        instructions:
            "Marinate the chicken with spices and flour. Heat oil in a pan. Deep fry the chicken pieces until crispy and golden. Serve hot."
    }
];


// ===============================
// GET HTML ELEMENTS
// ===============================

const recipeContainer = document.getElementById("recipe-container");

const popup = document.getElementById("recipe-popup");

const popupTitle = document.getElementById("popup-title");

const popupImage = document.getElementById("popup-image");

const popupIngredients = document.getElementById("popup-ingredients");

const popupInstructions = document.getElementById("popup-instructions");

const closePopup = document.getElementById("close-popup");


// ===============================
// SHOW RECIPES
// ===============================

function displayRecipes() {

    recipeContainer.innerHTML = "";

    recipes.forEach((recipe, index) => {

        const recipeCard = document.createElement("div");

        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">

            <h3>${recipe.name}</h3>

            <button onclick="openRecipe(${index})">
                View Recipe
            </button>
        `;

        recipeContainer.appendChild(recipeCard);
    });
}


// ===============================
// OPEN RECIPE POPUP
// ===============================

function openRecipe(index) {

    const recipe = recipes[index];

    popupTitle.textContent = recipe.name;

    popupImage.src = recipe.image;

    popupImage.alt = recipe.name;

    // Clear old ingredients
    popupIngredients.innerHTML = "";

    // Add ingredients
    recipe.ingredients.forEach(function (ingredient) {

        const li = document.createElement("li");

        li.textContent = ingredient;

        popupIngredients.appendChild(li);
    });

    // Add instructions
    popupInstructions.textContent = recipe.instructions;

    // Show popup
    popup.style.display = "flex";
}


// ===============================
// CLOSE POPUP
// ===============================

closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});


// ===============================
// CLOSE POPUP BY CLICKING OUTSIDE
// ===============================

popup.addEventListener("click", function (event) {

    if (event.target === popup) {

        popup.style.display = "none";

    }

});


// ===============================
// START WEBSITE
// ===============================

displayRecipes();