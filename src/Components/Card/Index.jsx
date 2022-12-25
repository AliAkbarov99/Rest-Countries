import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'

const Index = ({country}) => {

  return (
    <Link to={`/country/${country.name.common}`}>
    <div className='card'>
        <div className='card__img'>
        <img src={country.flags.png} alt="" />
        </div>
        <div className='card__text'>
          <h2>{country.name.common}</h2>
          <p>
            Population: 
            <span>{country.population}</span>
          </p>
          <p>
            Region: 
            <span>{country.region}</span>
          </p>
          <p>
            Capital: 
            <span>{country.capital}</span>
          </p>

        </div>
    </div>
    </Link>
  )
}

export default Index