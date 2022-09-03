const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let w = 0;
while (w < ingredients.length) {
  console.log(ingredients[w]);
  w++;
}

for (let f = 0; f < ingredients.length; f++) {
  console.log(ingredients[f]);
}

reversedIngredients = ingredients.reverse();
for (let r = 0; r < reversedIngredients.length; r++) {
  console.log(reversedIngredients[r]);
}