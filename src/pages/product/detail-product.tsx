
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { ListProduct } from './product-list'




 export function DetailProduct() {
    let { productId } = useParams<any>();
    const [product, setProduct]  = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async() => {
            axios
            .get(`http://localhost:5000/product?id=${productId}`)
            .then((res) => res.data)
            .then((data) => {
              setProduct(data);
            })
            .catch((err) => setError(err));
        })();
      }, []);

    return (
        <div className="wrapper fadeInDown">
           <h1>Product Detail</h1>
            {product &&
            product.length > 0 &&
            product.map((product : any) => (
            <div id="formContent">
                <div>ID : {product.id}</div>
               <div>Product name :  {product.productName}</div>  
               <div>Category: {product.category}</div> 
               <div>Price : {product.price}</div>   
               <div>Supplier : {product.supplier}</div> 
               <div>Description :  {product.description}</div>
            </div>
        ))}
             

             
           
        </div>

    )
}
export default DetailProduct;