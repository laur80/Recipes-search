
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import axios from 'axios';


const index: React.FC  = ()=> {

  const[product, setProduct] = useState('');
  const[recipes, setRecipes] = useState([]);
  const[state, setState]= useState(false)

  // console.log('m',state);

  useEffect(()=>{
    const APP_ID = '023ea4e4';
    const APP_KEY = 'd8a0fa7d4333313a13ac6b00465b9819';
    let URL = `https://api.edamam.com/search?q=${product}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    if(state===true && product.length > 0){
    const dt= async()=>{
      const res = await axios.get(URL)
    setRecipes(res.data.hits)
  }
    dt()
    setState(false)
 
  }else if(state===true && product.length === 0){
    setState(false)
    alert('Please insert your desired item!')
  }
  },[state])

  function handleClick(){
    setState(true)
  }

  function handleChange(e){
    setProduct(e.target.value);
  }


  return (
    <div id={styles.fullcontainer} >

    <div className='d-flex'>
      <div className="input-group mb-3"id={styles.inputData}>
        <button onClick={handleClick} className="btn btn-outline-danger bg-dark" type="button" id="button-addon1">Button</button>
        <input onChange={handleChange} type="text" className="form-control" placeholder="type a base product food" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      </div>
    </div>

    <div id={styles.container} className="text-center">
      {(recipes.length > 0) ? 
      recipes.map((r,index)=>(
        <div key={index} id={styles.card} className="card" >
          <img src={r.recipe.image} id={styles.food}className="card-img-top" alt="selected recipe" />
          <div className="card-body text-center ">
            <Link href={`/${product}/${index}`} >
              <a className='text-center '>
              {r.recipe.label}
              </a>
            </Link>
            
          </div>
      </div>
      )) : <div className="text-center mx-auto">
        <h3 className="text-center mx-auto">No Recipes found</h3>
      </div> }
    </div>

    </div>
  );
}

export default index;
