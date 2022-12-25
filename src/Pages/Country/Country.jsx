import { Link } from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import './CountryStyle.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Country = () => {
    const [item,setItem] = useState({});
    const {country} = useParams()
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${country}`).then(res=>{
            let a = res.data[0];
          setItem(a)
          
        })
      },[])

    //   let languages = Object.values(item.languages)
      
    return (
        <>      
                <div id='country'>
                <div className='country__back'>
                    <Link to="/"><button><i class="fa-solid fa-arrow-left-long"></i> Back</button></Link>
                </div>
                <div className='country__main'>
                    <div className='country__main__img'>
                        <img src={item.flags?.svg}/>
                    </div>
                    <div className='country__main__text'>
                        <h1></h1>
                        <div className='country__main__text__box'>
                            <div className='country__main__text__left'>
                                <p>
                                    Native Name:
                                    <span>{item.name?.common}</span>
                                </p>
                                <p>
                                    Population:
                                    <span>{item.population}</span>
                                </p>
                                <p>
                                    Region:
                                    <span>{item.region}</span>
                                </p>
                                <p>
                                    Sub Region:
                                    <span>{item.subregion}</span>
                                </p>
                                <p>
                                    Capital:
                                    <span>{item.capital}</span>
                                </p>
                            </div>
                            <div className='country__main__text__right'>
                                <p>
                                    Top Level Domain:
                                    <span></span>
                                </p>
                                <p>
                                    Currencies:
                                    <span></span>
                                </p>
                                <p>
                                    Languages:
                                    {/* {languages.map(language=>{
                                        return <span>{language}</span>
                                    })} */}
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Country