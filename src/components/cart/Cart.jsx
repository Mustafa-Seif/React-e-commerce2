import React, { useState,useEffect } from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import {deleteProduct} from '../../Redux/CartSlice'



function Cart() {
  const productsArrSlice = useSelector((state) => state.productsStore.productsArr);

  const [total,setTotal] = useState(0)

  useEffect(() => {
    let a = 0;
    productsArrSlice.forEach((e) => {
      a += e.price ;
    });
    setTotal(a);
  }, []);


  // delete item 
  const dispatch =useDispatch()

  const delItem=(e,i)=>{
    dispatch(deleteProduct(e,i))

  }

  if (productsArrSlice.length == 0) {
    return (
      <img style={{margin:" 0 auto ", display: "block", width:" 40%"}} src="https://cdn.dribbble.com/users/1231865/screenshots/11157048/media/bc9427646c632ded563ee076fdc5dfda.jpg?compress=1&resize=400x300" alt="no item"/>
    )
  }

  return (

    
    <section className="cart">
      <div className="container">
        <h1>Cart details</h1>
        <div className="cart_warpper mt-5" >
          <table style={{ width: "100%" }} >
            <tr>

              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="text-danger">Remove</th>
            </tr>

            {productsArrSlice.map((e, i) => {
              return (
                <tr>
                  <td style={{width:"100px"}}><div><img src={e.image} alt="image" width="50%" /></div></td>
                  <td>{e.title}</td>
                  <td>{e.price}</td>
                  <td ><button className="btn btn-success me-2" >+</button>
                    <button className="btn btn-danger ms-2"  >-</button></td>
                  <td><button className="btn btn-danger" onClick={()=>delItem(e,i)}>Remove</button></td>
                </tr>
              )
            })}
          </table>

          <h3 className="mt-2">Total: <span className="text-info">{total}</span></h3>
        </div>
        {/* <div>
      <img style="margin: 0 auto ; display: block; width: 40%;" src="https://cdn.dribbble.com/users/1231865/screenshots/11157048/media/bc9427646c632ded563ee076fdc5dfda.jpg?compress=1&resize=400x300" alt="no item"/>
    </div> */}
      </div>
    </section>
  )
}

export default Cart