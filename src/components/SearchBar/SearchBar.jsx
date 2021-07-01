import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import './SearchBar.css'
import { Button } from '../Button/Button'
import { DrinkResult } from '../DrinkResult/DrinkResult'
import { getIngredients } from '../utils/utils'

export function SearchBar() {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [ingredientResults, setIngredientResults] = useState([])
  const [loading, setLoading] = useState(false)
  const search = async (value) => {
    if (value == null) return
    setLoading(true)
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`,
    )
    setData(result.data.drinks[0])
    console.log('start')
    await setIngredientResults(getIngredients(data))
    setLoading(false)
    console.log('here')
  }

  const { strDrink: titleResults, strDrinkThumb: imageResults } = data

  return (
    <>
      <DrinkResult
        ingredientResults={ingredientResults}
        titleResults={titleResults}
        imageResults={imageResults}
        isLoading={loading}
      />
      <div className="search-bar">
        <Form>
          <Form.Group>
            <Form.Control
              size="lg"
              type="search"
              value={value}
              onKeyPress={(event) => {
                if (event.key == 'Enter') {
                  search()
                  event.preventDefault()
                }
              }}
              placeholder="Search for a drink..."
              onChange={(e) => setValue(e.target.value)}
            ></Form.Control>
            <div
              style={{
                marginLeft: '185px',
              }}
            >
              <Button onClick={search} title="submit" size="lg" value={value} />
            </div>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}
