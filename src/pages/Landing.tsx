import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CocktaikList, { Drink } from '../components/CocktaikList'

interface LoaderData {
  drinks: Drink[]
  searchTerm: string
}

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async (): Promise<LoaderData> => {
  const searchTerm = ''
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData() as LoaderData

  return (
    <>
      <CocktaikList drinks={drinks} />
    </>
  )
}

export default Landing
