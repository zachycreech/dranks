export function getIngredients(data) {
  const ingredients = []
  for (let i = 1; i < 15; i++) {
    const ingredient = eval(`data.strIngredient${i}`)
    const measurement = eval(`data.strMeasure${i}`)
    if (ingredient && measurement) {
     ingredients.push(`${measurement} ${ingredient}`)
    }
    if (ingredient && !measurement) {
     ingredients.push(ingredient)
    }
  }
  console.log('finished')
  return ingredients
}
