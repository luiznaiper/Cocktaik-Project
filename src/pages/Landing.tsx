import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CocktaikList, { Drink } from '../components/CocktaikList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'

interface LoaderData {
  drinks?: Drink[]
  searchTerm: string
}

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }): Promise<LoaderData> => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || ''
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))

    return { searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData() as LoaderData
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktaikList drinks={drinks} />
    </>
  )
}

export default Landing
