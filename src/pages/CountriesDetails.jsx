import React from 'react'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { allcountries } from '../assets/data/countries'


export default function () {
    let {countryId} = useParams();
    let navigate = useNavigate()
    const country = allcountries.find(({id}) => id === countryId)
    
    
  return (
    <>
    <Header PageTitle={country.name}/>
    <Main>
        <p><b>Capital: </b>{country.capital}</p>
        <p><b>Região: </b>{country.region}</p>
        <p><b>População: </b>{country.population}</p>
        <p><b>Área: </b>{country.area}</p>
        <button onClick={() => navigate('/')} >
            Voltar para Home
        </button>
    </Main>
    <Footer/>
    </>
  )
}
