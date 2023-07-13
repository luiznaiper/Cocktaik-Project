import axios from 'axios'
import React from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'
import { Link } from 'react-router-dom'

interface DrinkData {
  strDrink: string
  strDrinkThumb: string
  strAlcoholic: string
  strCategory: string
  strGlass: string
  strInstructions: string
}

interface LoaderData {
  id: string
  data: { drinks: DrinkData[] }
}

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<LoaderData> => {
  const id = params.id
  if (id === undefined) {
    throw new Error('ID parameter is missing')
  }

  const { data } = await axios.get(`${singleCocktailUrl}${id}`)

  return { id, data }
}

const Cocktail = () => {
  const { id, data } = useLoaderData() as LoaderData

  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
