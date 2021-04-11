import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

type IFormInput = {
  productName: string;
  category: number;
  supplier: string,
  price: number,
  description: string


}

export function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  async function onSubmit (data: IFormInput)  {
     const product = {
      productName: data.productName,
      category: data.category,
      supplier: data.supplier,
      price: data.price,
      description: data.description
    };
    try {
      await axios.post("http://localhost:5000/product", product);
      const res = await axios.get("http://localhost:5000/product");
      const data = res.data;
      setProduct(data);
      alert('Success');
    } catch (err) {
      setError(err);
    }
  }
  
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Product name</label>
        <input {...register("productName", { required: true, maxLength: 20 })}  className="form-control" id="exampleFormControlInput1" placeholder="" />
        {errors?.productName?.type === "required" && <p>This field is required</p>}
        {errors?.productName?.type === "maxLength" && (
          <p>Username cannot exceed 20 characters</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Category ID</label>
        <select  {...register("category")} className="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Supplier</label>
        <input {...register("supplier")}  className="form-control" id="exampleFormControlInput1" placeholder="" />
        
      </div>
      <div  className="form-group">
        <label htmlFor="exampleFormControlInput1">Price</label>
        <input {...register("price")}  className="form-control" id="exampleFormControlInput1" placeholder="" />
        
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Description</label>
        <textarea  {...register("description")} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
      </div>
      <button id="signupSubmit" type="submit" className="btn btn-info btn-block">Add new product</button>
      {error && <p>Something went wrong!</p>}
    </form>


  )
}
export default AddProduct;