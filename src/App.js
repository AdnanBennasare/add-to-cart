import React , {useState} from 'react';
import './App.css';
import NavBar from './compenants/NavBar';
import Amazon from './compenants/Amazon';
import Cart from './compenants/Cart';
import './Styles.css/Amazon.css';


function App() {
  const [show, setShow] = useState(true); 
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);


  const handleclick = (item)=>{
    let isPresent = false; 
    cart.forEach((product) =>{ 
      if (item.id === product.id) 
      isPresent = true;
     }) 
      if (isPresent) 
      {
      setWarning (true); 
      setTimeout(()=>{ 
      setWarning(false); 
      }, 2000); 
      return; 
    } 
      setCart([...cart, item]);
  }

  return (
   <React.Fragment>
    <NavBar size={cart.length}/>
    <Amazon handleclick={handleclick} />
    <Cart />
    {
      warning && <div className='warning' >item is already added to your cart</div> 
    }
   </React.Fragment>
  );
}

export default App;