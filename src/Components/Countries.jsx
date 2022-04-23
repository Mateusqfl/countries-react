import React from 'react'
import { Listli, ListUl } from '../assets/styles/CountriesStyle'
import Country from './Country'

export default function Countries({
    
    countries = 'Países',
    quantityOfCountries = 0,
    titleOfQuantity = 'Quantidades de países',
    title='Título',
    onCountryButtonClick = null,
     visitedCountries=[],

}) 

{
  return (
    <div>
        <h2>
            {title}
        </h2>
        <p>
           {titleOfQuantity}: {quantityOfCountries}
        </p>
        
        <ListUl>

    {countries.map(country => {

      let isCountryVisited = visitedCountries.find(({id}) => country.id === id)

        return <Listli key = { country.id }>

        <Country country = {country} isCountryVisited={isCountryVisited} onCountryButtonClick ={onCountryButtonClick }/>

        </Listli>
    })}
    </ListUl></div>
  )
}
