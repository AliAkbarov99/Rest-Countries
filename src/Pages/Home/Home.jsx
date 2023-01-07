import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Index'
import { Select } from 'antd';
import './HomeStyle.css'
import axios from 'axios';


const Home = () => {
  const [data,setData] = useState([]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all").then(res=>{
      setData(res.data)
      
    })
  },[])

  return (
    <div id='main'>
    <div className='main__header'>

      <div className='main__header__search'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search for country...' onChange={(e)=>{
          axios.get(`https://restcountries.com/v3.1/name/${e.target.value}`).then(res=>{
            setData([...res.data])
          })
        }}/>
      </div>

      <div className='main__header__select'>
        <>
          <Select
            
            defaultValue="Filter by region"
            style={{
              width: 192, 
            }}
            onChange={(e) => {handleChange()
              axios
                .get(`https://restcountries.com/v3.1/region/${e.target.value}`)
                .then((res) => setData([...res.data]))
                
            }
            
          }
            options={[
              {
                value: 'Africa',
                label: 'Africa',
              },
              {
                value: 'Americas',
                label: 'Americas',
              },
              {
                value: 'Asia',
                label: 'Asia',
              },
              {
                value: 'Europa',
                label: 'Europa',
              },
              {
                value: 'Oceania',
                label: 'Oceania',
              },
            ]}
          />


        </>
      </div>
    </div>

    <div className='main__header__cards'>
            {data.map(country=>{
              return <Card key={country.name.common}  country={country} />
            })}
            
    </div>
  </div>

  )
}

export default Home