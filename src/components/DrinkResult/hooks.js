import { useEffect, useState} from 'react'
import axios from 'axios'
import { getIngredients } from '../utils/utils'

export function useRandomCocktail() {
const [data, setData] = useState([])

useEffect(async () => {
  const result = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  )
  setData(result.data.drinks[0])
}, [])

  const ingredients = getIngredients(data)

  const { strDrink: title, strDrinkThumb: image } = data
  return {ingredients, title, image}
}

