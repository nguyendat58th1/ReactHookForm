import React, { useEffect, useState } from "react";
import axios from "axios";
import {GetListProduct} from "./productService/getlistProduct"
import { Link } from "react-router-dom";


export function ListProduct() {
    const [product, setProduct]: [any, any] = useState([]);
    useEffect(() => {
        GetListProduct().then(data => {
            setProduct(data.data);
        });
    }, []);

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Product name</th>
                <th scope="col">Category</th>
                <th scope="col">Supplier</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope ="col"></th>
                <th scope ="col"></th>

                </tr>
            </thead>
            <tbody>
            {product &&
                    product.length > 0 &&
                    product.map((p: any) => (
                        <tr>
                        <th key={p.id} scope="row">{p.id}</th>
                        <td>{p.productName}</td>
                        <td>{p.category}</td>
                        <td>{p.supplier}</td>
                        <td>{p.price}</td>
                        <td>{p.description}</td>
                        <td> <Link to={`/detailproduct/${p.id}`}>Detail</Link></td>
                        <td> <Link to={`/editproduct/${p.id}`}>Edit</Link></td>
                        </tr>
                ))}
                {/* {listPro.err && <p>Something went wrong!</p>} */}
               
            </tbody>
        </table>

    )
}