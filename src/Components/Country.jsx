import React from 'react'
import { Link } from 'react-router-dom'
import { CountrieLink } from '../assets/styles/StyleLinksCountries'

export default function Country({
  
  country=[],
  onCountryButtonClick = null,
  isCountryVisited = false

}){

  function handleCountryClick(){
    if( onCountryButtonClick){

      onCountryButtonClick(country.id)

    }
}
  return (
    <>

    <CountrieLink to ={`/country/${country.id}`} >
        Nome do País: {country.name}
    </CountrieLink>
    
    <button onClick={handleCountryClick}>
    {isCountryVisited ? "País Visitado" : "Adicionar País Visitado"}
    </button>
    
    </>
  )
}
