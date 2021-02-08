import Image from 'next/image';
import axios from 'axios';
import styles from '../../../styles/Product.module.css';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps= async(context) => {
  const APP_ID = '023ea4e4';
  const APP_KEY = 'd8a0fa7d4333313a13ac6b00465b9819';
  let id= context.params.id.toString();
  let product = context.params.product.toString();
  let URL = `https://api.edamam.com/search?q=${product}&app_id=${APP_ID}&app_key=${APP_KEY}`
 
  const res = await axios(URL)
  // console.log(res);
  
  if (!res) {
    return {
      notFound: true,
    }
  }

  return {
    props: {recipe: res.data.hits[id].recipe}, // will be passed to the page component as props
  }
}

function index({recipe}) {
// console.log('indx',recipe);
return (
  <div className={styles.container}>

    <div className="card d-flex" id={styles.main} >

      <div className={styles.containphoto}>
        <img src={recipe.image}id={styles.food} className="card-img-top" alt="individual recipe"/>
      </div>

        <div className="text-center mt-5 ">
          <h5 className="card-title text-center mb-4">{recipe.label}</h5>
          {recipe.ingredients.map((ing,i)=>(<p key={i}>{ing.text}</p>))}
        </div>

      <a href={recipe.url} target="_blank" rel="noreferrer" className="text-center mt-5">Instructions</a>
     
    </div>
  </div>  
)
}

export default index

