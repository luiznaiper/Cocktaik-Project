import React from 'react'
import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

export interface Drink {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
  strAlcoholic: string
  strGlass: string
}

interface CocktailListProps {
  drinks: Drink[]
}

const CocktailList: React.FC<CocktailListProps> = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    )
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

export default CocktailList
