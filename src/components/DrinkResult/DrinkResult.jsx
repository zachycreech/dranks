import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Image } from 'react-bootstrap'
import './DrinkResult.css'

export function DrinkResult() {
  const [data, setData] = useState([])

  useEffect(async () => {
    const result = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    )
    setData(result.data.drinks[0])
  }, [])

  const { strDrink: title, strDrinkThumb: image } = data

  // get ingredients and measurements into an array to map
  const ingredients = []
  for (let i = 1; i < 15; i++) {
    const ingredient = eval(`data.strIngredient${i}`)
    const measurement = eval(`data.strMeasure${i}`)
    if (ingredient && measurement) {
      console.log('here')
      console.log(`${measurement} ${ingredient}`)
      ingredients.push(`${measurement} ${ingredient}`)
    }
    if (ingredient && !measurement) {
      console.log('hhere')
      ingredients.push(ingredient)
    }
  }

  return (
    <div className="container" style={{ width: '500px' }}>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <Image
        src={image}
        style={{ maxHeight: '375px', marginLeft: '50px' }}
        rounded
      />
      <div>
        <div style={{ fontSize: '.7em', textAlign: 'center' }}>
          <ul style={{ listStyle: 'none' }}>
            {ingredients.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
