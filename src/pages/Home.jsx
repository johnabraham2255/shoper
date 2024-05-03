import  { useEffect, useState } from 'react'
import axios from 'axios'
import Loding from '../components/Loding'
import { Link } from 'react-router-dom'


const Home=({search}) => {

    const [data,setData]= useState([])
    const [categories,setCategories]= useState([])
    const [filter,setFilter]= useState("")
    
    async function getProducts(){
        const res=await axios.get("https://dummyjson.com/products/")
        // console.log(res.data.products);
        setData([...res.data.products])

        const rescat=await axios.get("https://dummyjson.com/products/categories/")
        setCategories([...rescat.data])

    }
    useEffect(()=>{
        getProducts()
    },[])

    if(data.length==0) return (<Loding/>)
    return (

        <>
          
          <div className="home">
            <div className="container">
                <div className="container-fluid p-3 d-flex" style={{overflow:"auto"}}>
                
                       <button className='btn btn-outline-success m-3 p-3'>All</button>
                        {
                            categories.map((ct,index)=>(
                                <button className='btn btn-outline-secondary m-3 p-3' key={index} onClick={()=>{setFilter(ct)}}>{ct}</button>
                            ))
                        }
                      

                </div>
                <div className="row">
                    {
                        data.filter((i)=>(i.title.toLowerCase().includes(search.toLowerCase())))
                        .filter((dt)=>dt.category.includes(filter))
                        .map((dt,index)=>(
                            <div className="col-lg-3 my-3" key={index}>
                               <Link to={`/details/${dt.id}`} style={{textDecoration:"none"}}>
                               <div className="card " style={{width: "15rem"}} key={index}>
                                <div className="image" style={{width: "100%",height: "200px"}}>
                                <img src={dt.thumbnail} className="card-img-top" alt="..." style={{width: "100%",height: "100%",objectFit:"cover"}}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{dt.title.substring(0,15)}</h5>
                                    <p className="card-text">{dt.discription}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{dt.brand}</li>
                                    <li className="list-group-item">Price :{dt.price}</li>
                                    <li className="list-group-item">Rating :{dt.rating}</li>
                                </ul>
                                </div>

                               </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
          </div>


        </>
    )
}


export default Home