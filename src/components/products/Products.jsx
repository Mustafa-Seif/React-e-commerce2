import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (products.length == 0) {
    return <div className="spin"><Spinner  animation="border" variant="danger" /></div> 
    
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            {products.map((e) => {
              return (
                <div
                  className="card text-center mb-5 mt-5 p-4 col-4 "
                  style={{ width: "22rem", height: "450px" }}
                  key={e.id}
                >
                  <img
                    src={e.image}
                    className="card-img-top"
                    alt="..."
                    height={"200px"}
                  />
                  <div className="card-body">
                    <p className="card-title">{e.title}</p>
                    {/* <p className="card-text">{d.title} $</p> */}
                    <h4 className="card-text">{e.price} $</h4>
                    <Link
                      to={`/products/${e.id}`}
                      className="btn btn-outline-danger mb-0"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
