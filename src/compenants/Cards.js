import React from 'react'
import '../Styles.css/Cards.css'


const Cards = ({item, handleclick}) => {
    const {title, author, price, img} = item;

  return (
<div className='cards'>
<div className='image_box'>
<img src={img}/>
</div>
<div className='details'>
<p>{title}</p>
<p>{author}</p>
<p>price -{price} DH</p>
<button onClick={() => handleclick(item)}>Add to cart</button>
</div>
</div>
  )
}

export default Cards
