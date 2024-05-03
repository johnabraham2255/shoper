import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigator=useNavigate()
  const [cart,setCart]=useState([])
  let [count,setCount]=useState(0)
  useEffect(()=>{
    const data=[];
    const keys=Object.keys(localStorage);
    for(let i=0;i<keys.length;i++)
    {
      data.push(JSON.parse(localStorage.getItem(keys[i])))
    }
    setCart(data)
  },[count])

  const removeProduct=(key)=>{
    localStorage.removeItem(key)
    setCount(count=count+1)

  }
  const buy=()=>{
    localStorage.clear();
    navigator('/')
  }

  return (
    <div>
        <h1 className='text-center'> Cart Products</h1>
        <div className="container">
          <div className="row">
            {
              cart.map((ct,index)=>(
                <div className="col-lg-12 d-flex justify-content-between algin-center m-4 border" key={index}>
                  <div className="start1">
                    <div className="st d-flex">
                      <img src={ct.thumbnail} style={{height:"200px"}} alt="" />
                      <div className="as d-flex align-items-middle">
                        <h2>{ct.title}</h2>
                        <h3>${ct.price}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="start2 d-flex align-items-center">
                    <button className='btn btn-danger' onClick={()=>{removeProduct(ct.id)}}>remove</button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="st2  d-grid ">
            {cart.length!=0?<button className='btn btn-primary' onClick={buy}>Buy</button>:<p>Click <Link to={'/'}>Home</Link>for add products</p>}
          </div>
        </div>
    </div>
  )
}

export default Cart