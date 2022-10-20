import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {addProduct} from '../../Redux/CartSlice'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import './product.css'

const Product = () => {
  const proId = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${proId.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const productsArr=[]


  const productsArrSlice = useSelector((state)=>state.productsStore.productsArr);
    // console.log(productsArrSlice);

    const dispatch = useDispatch();

    const addToCart=(p)=>{
      dispatch(addProduct(p))


    }

    if (data.length == 0) {
      return <div className="spin"><Spinner  animation="border" variant="danger" /></div> 
      
    }


  return (
    <div className="container py-5">
      <div
        className="card text-center mx-auto"
        style={{ width: "22rem", height: "450px" }}
        key={data.id}
      >
        <img
          src={data.image}
          className="card-img-top"
          alt="..."
          height={"200px"}
        />
        <div className="card-body">
          <p className="card-title">{data.title}</p>
          <h4 className="card-text">{data.price} $</h4>
          <button className="btn btn-outline-danger" onClick={()=>addToCart(data)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
