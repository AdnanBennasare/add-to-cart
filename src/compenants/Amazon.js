import React from 'react'
import list from '../data';
import '../Styles.css/Amazon.css'
import Cards from './Cards';


const Amazon = ({handleclick}) => {
  return (

    <section>
    {
        list.map((item)=>(
            <Cards item={item} handleclick={handleclick}/>
        ))
    }
</section>
 )
 }

export default Amazon
