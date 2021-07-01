import React, { useState } from 'react'
import axios from 'axios'
import { Image, Spinner } from 'react-bootstrap'
import './DrinkResult.css'
import { useRandomCocktail } from './hooks'

export function DrinkResult(props) {
  let { image, ingredients, title } = useRandomCocktail()
  const { imageResults, titleResults, ingredientResults } = props

  let ingredientsList
  if (!imageResults) {
    ingredientsList = ingredients
  }
  if (imageResults) {
    ingredientsList = ingredientResults
  }

  console.log(ingredientResults)
  if (props.isLoading)
    return (
      <div className="container" style={{ width: '500px', height: '700px' }}>
        <Spinner
          as="span"
          animation="grow"
          variant="info"
          style={{ marginLeft: '240px', marginTop: '340px' }}
        />
      </div>
    )
  return (
    <div className="container" style={{ width: '500px', height: '700px' }}>
      <h1 style={{ textAlign: 'center' }}>
        {titleResults ? titleResults : title}
      </h1>
      <Image
        src={imageResults ? imageResults : image}
        style={{ maxHeight: '375px', marginLeft: '50px' }}
        rounded
      />
      <div>
        <div style={{ fontSize: '.7em', textAlign: 'center' }}>
          <ul style={{ listStyle: 'none' }}>
            {ingredientsList.map((items, index) => {
              return <li key={index}>{items}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
