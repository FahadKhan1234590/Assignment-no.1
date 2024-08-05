import React from "react";
import { useParams } from "react-router-dom";
import productData from "./Dashboard/productData";

const Product = () => {
  const { id } = useParams();
  console.log(id)
  const filterData = productData.filter((e, i) => {
    return e.id == id;
  });



  return (
    <div>
    <div className="ms-2"> 
       <p className="fs-2 fw-bold">Product Page</p>
       </div>
      <div className="mt-5 ps-5">
        <div className="row w-100">
      {filterData.map((e,i) => {
        return (
          <>
          <div className="col-md-6">
            <img src={e.image} className="ms-md-5"  style={{width: "400px"}} />
          </div>
          
          <div className="col-md-6">

            <div className="mt-5 pt-5">
            <div className="mb-3">
            <span className="fs-3 fw-bold">{e.title}</span>
              </div>
            <div className="mb-5 pb-2">
            <p className="fs-4">{e.description}</p>
            </div>

            <div className="d-inline me-5">
              <button className="btn btn-primary fs-5">Add to Cart</button>
            </div>
            <div className="d-inline">
            <span>
            <h2 className="me-3 d-inline">Price:</h2>
              <span className="fs-2">{e.price}$</span>
              
              </span>
            </div>
            </div>
          </div>
          </>
        );
      })}
        </div>
      </div>
    </div>
  );
};

export default Product;
