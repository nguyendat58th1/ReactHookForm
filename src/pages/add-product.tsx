import { useForm } from "react-hook-form";

type IFormInput = {
  product: string;
  number: number;
  textarea: string

}

export function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    console.log(data);
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Product</label>
        <input {...register("product", { required: true, maxLength: 20 })}  className="form-control" id="exampleFormControlInput1" placeholder="" />
        {errors?.product?.type === "required" && <p>This field is required</p>}
        {errors?.product?.type === "maxLength" && (
          <p>Username cannot exceed 20 characters</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select  {...register("number")} className="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea  {...register("textarea")} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
      </div>
      <button id="signupSubmit" type="submit" className="btn btn-info btn-block">Add new product</button>
    </form>


  )
}
export default AddProduct;