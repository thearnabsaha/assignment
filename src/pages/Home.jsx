import React,{ useState,useEffect } from 'react'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import "../Styles/Home.css"
export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});
const Home = () => {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState("")
  useEffect(() => {
    const showProducts=async()=>{
      setStatus(STATUSES.LOADING)
      try {
        const res= await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
        setStatus(STATUSES.IDLE)
      } catch (error) {
        console.log(error);
        setStatus(STATUSES.ERROR)
      }
    }
    showProducts()
  }, [])
  console.log(products);
    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
  return (
    <>
      <h1 className='heading'>Welcome to Store 24</h1>
      <div className='container'>
        {
          products.map((e)=>{
            return(
              <div key={e.id} className="product">
                <img src={e.image} alt="product" className='productImg' />
                <h1 className='productTitle'>{e.title}</h1>
                <h1 className='ProductPrice'> ${e.price}</h1>
                <button className='btn'><Link to="/product" >View Product</Link></button>
              </div>
            )
          })
        }
      </div>
      <Footer/>
    </>
  )
}

export default Home