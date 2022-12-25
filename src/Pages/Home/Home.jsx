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
        <input type="text" placeholder='Search for country...' />
      </div>

      <div className='main__header__select'>
        <>
          <Select
            defaultValue="Filter by region"
            style={{
              width: 192, 
            }}
            onChange={handleChange}
            options={[
              {
                value: 'africa',
                label: 'Africa',
              },
              {
                value: 'americas',
                label: 'Americas',
              },
              {
                value: 'asia',
                label: 'Asia',
              },
              {
                value: 'europa',
                label: 'Europa',
              },
              {
                value: 'oceania',
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