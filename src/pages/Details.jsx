import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loding from '../components/Loding';

const Details = ({setCnt,cnt}) => {
    const navigator=useNavigate()
    const [data,setData]=useState({})
    const {id}=useParams();
    console.log(id);

    async function getDetails(){
        const res=await axios.get(`https://dummyjson.com/products/${id}`)

        setData(res.data)
    }
    const addToCart=()=>{
      const key=data.id
      console.log(key);
      localStorage.setItem(key,JSON.stringify(data))
      setCnt(cnt=cnt+1)

      navigator('/cart')

    }
useEffect(()=>{
    getDetails()
},[])

console.log(data);
if(Object.keys(data).length===0) return<Loding/>
  return (
    <div>
        <div className="row">
            <div className="p-3 col-lg-6 col-md-4 col-sm-12">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
      {
        data.images?.map((img,index)=>(  
                <div className="carousel-item active" key={index}>
                <img src={img} className="d-block w-100" style={{width:"100%",height:"500px",objectFit:"fill"}} alt="..."/>
                </div>
        ))
      }
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div className="container">
        <div className="container-fluid p-3 d-flex justify-content-evenly" style={{overflow:"auto"}}>
            {
                data.images?.map((img,index)=>(
                    <div key={index}><img src={img} alt=""  style={{width:"50px",height:"50px"}}/></div>
                ))
            }
        </div>
        
        </div>
        <div className="d-grid gap-2">
  <button className="btn btn-warning text-light" type="button" onClick={addToCart}>ADD TO CART</button>
</div>
            </div>
            <div className="p-3 col-lg-6 col-md-8 col-sm-12">
              <h1>{data.title}</h1>
              <h3 className="text-secondary">{data.description}</h3>

              <button className="btn btn-success " style={{ fontWeight: 'bold' }}>
                     {data.rating} &#9733; 
                </button>
                <div className="row ">
                <div className="col-lg-6">
                <h1>discountPrice</h1><h3><p class="text-decoration-line-through text-secondary">$ {data.price} /- <h4 class=" text-success"> {data.discountPercentage
                } %</h4></p> </h3>
                </div>
               <div className="col-lg-6"> <h1>second price <span class="badge text-bg-danger">New</span></h1></div>
                </div>
                
                

              
            </div>
        </div>
    </div>
  )
}

export default Details