import './login.css'
import { useForm } from "react-hook-form";



type IFormInput = {
    username: string;
    password: string;

}
export function Login() {
    const { register, handleSubmit,formState: { errors } } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="https://iconarchive.com/download/i52489/custom-icon-design/pretty-office-8/Users.ico" id="icon" alt="User Icon" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("username", { required : true,maxLength: 20 })} type="text" id="username" className="fadeIn second" placeholder="username" />
                    {errors?.username?.type === "required" && <p>This field is required</p>}
                    {errors?.username?.type === "maxLength" && (
                        <p>Username cannot exceed 20 characters</p>
                    )}
                    <input {...register("password", {  required: true })} type="password" id="password" className="fadeIn third" placeholder="password" />
                    {errors?.password?.type === "required" && <p>This field is required</p>}
                    
                    <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>

    )
}
export default Login;