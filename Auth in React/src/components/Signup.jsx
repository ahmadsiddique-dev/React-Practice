import { space } from "postcss/lib/list";
import { useForm } from "react-hook-form"


const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (e) => {
    console.log(e)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register("name", { required: true, maxLength: 30 })}
      />
      {errors.name && errors.name.type === "required" && (
        <span>This is required</span>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register("email", {required : true})}/>
      {errors.email && errors.email.type === "required" && (
        <span>Input Email.</span>
      )}
      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register("password", {required : true, minLength : 8})} />
      {errors.password && errors.password.type === "required" && (
        <span>Input Password</span>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <span>Password is too short.</span>
      )}
      <input type="submit" />
    </form>
    </div>
  )
}

export default Signup;
