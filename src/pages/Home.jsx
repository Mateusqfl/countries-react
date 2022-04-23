import React, { useState } from 'react'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import { allcountries } from '../assets/data/countries'
import Countries from '../Components/Countries'
import { FilterDiv, FlexDiv, LabelFilter } from '../assets/styles/HomeStyle'

export default function Home() {

    const [countryfilter, setcountryfilter] = useState('')
    const [visitedCountries, setvisitedCountries] = useState([])

 
    function handleFilterCountry(event) {
        let newfiltercountries =  event.target.value;
        setcountryfilter(newfiltercountries)
    }

    const countryfilterLowerCase = countryfilter.trim().toLocaleLowerCase();

    const filtercountries = allcountries.filter(({name}) => {
        let nameLowerCase = name.toLocaleLowerCase();
        return nameLowerCase.includes(countryfilterLowerCase)
    })

    function toggleVisetedCountries (countryId){
        let NewVisitedCountries = [ ...visitedCountries]
        let isCountyVisited = NewVisitedCountries.find(({id})=> id === countryId)

        if(isCountyVisited){

            NewVisitedCountries = NewVisitedCountries.filter(({id})=> id !== countryId)

        }
        else{
            let visitedCountry = allcountries.find(({id})=> id === countryId)
            NewVisitedCountries.push(visitedCountry)
        }

        setvisitedCountries(NewVisitedCountries)


    }

  return (
    <>
        <Header PageTitle={'Home'}/>
        <FilterDiv>
        
        <LabelFilter htmlFor="inputFilterCountry">Filtrar paises pelo nome:</LabelFilter>
            <input type="text" name='inputFilterCountry' id='inputName'  onChange={handleFilterCountry} />

        </FilterDiv>
        

            <h2>
                Países
            </h2>

            <FlexDiv>
                <Countries title='Todos os paises' countries = {filtercountries} quantityOfCountries={filtercountries.length}  titleOfQuantity = 'Quantidades de países' onCountryButtonClick={toggleVisetedCountries} visitedCountries={visitedCountries}/>
                <Countries title ='Paises visitados' countries = {visitedCountries} quantityOfCountries={visitedCountries.length}  titleOfQuantity = 'Quantidades de países visitados' onCountryButtonClick={toggleVisetedCountries} visitedCountries={visitedCountries}/>
            </FlexDiv>
            
      
        <Footer/>

    </>
  )
}
