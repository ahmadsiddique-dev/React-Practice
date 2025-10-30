import { useForm } from "react-hook-form"


const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="w-full min-w-screen min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-12 items-center justify-center">
        <div className=" h-30 flex flex-col gap-2.5 items-center justify-center  rounded-full w-30 bg-gray-400">
            <div className="w-8 h-8 rounded-full bg-[#2b2b2b]"></div>
            <div className="w-15 custom-rounded h-7 bg-[#2b2b2b]"></div>
        </div>
        <form
          className="flex flex-col justify-center gap-9 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center relative">
            <input
              placeholder="Username..."
              className="text-center border-none outline-none bg-black py-1.5 px-4 "
              type="username"
              id="username"
              {...register("username", { required: true, minLength: 3 })}
            />

            {errors.username && errors.username.type === "required" && (
              <span className="absolute bottom-10 text-red-500">
                Input username
              </span>
            )}
            {errors.username && errors.username.type === "minLength" && (
              <span className="absolute bottom-10 text-red-500">
                username is too short.
              </span>
            )}
          </div>

          {/* <label htmlFor="email">Email</label> */}
          <div className="flex flex-col items-center relative">
            <input
              placeholder="Email..."
              className="text-center border-none outline-none bg-black py-1.5 px-4"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="absolute bottom-10 text-red-500">
                Input Email.
              </span>
            )}
          </div>
          {/* <label htmlFor="password">Password</label> */}
          <div className="flex flex-col items-center relative">
            <input
              placeholder="password..."
              className="text-center border-none outline-none bg-black py-1.5 px-4 "
              type="password"
              id="password"
              {...register("password", { required: true, minLength: 8 })}
            />

            {errors.password && errors.password.type === "required" && (
              <span className="absolute bottom-10 text-red-500">
                Input Password
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="absolute bottom-10 text-red-500">
                Password is too short.
              </span>
            )}
          </div>
          <input
            className="bg-[#0e0c0c] active:bg-black cursor-pointer hover:bg-[#1d1919] py-1.5 px-20.5 "
            type="submit"
          />
        </form>
        <div className=" h-0">Already have an account ? <a href="" className="text-blue-500">Login</a></div>
      </div>
    </div>
  )
}

export default Signup;
