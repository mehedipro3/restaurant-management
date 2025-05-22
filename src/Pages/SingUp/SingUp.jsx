import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const SingUp = () => {

  const {CreateUser} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    CreateUser(data.email , data.password)
    .then(result=>{
      console.log(result.user);
    })

  };

  console.log(watch("example"))

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sing Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text"  {...register("name", { required: true })} className="input" placeholder="Your Name" />
                {errors.name && <span className="text-red-500">Name is required</span>}
                <label className="label">Email</label>
                <input type="email" {...register("email")} className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" {...register("password",
                  {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
                  })}
                  className="input" placeholder="Password" />
                {errors.password?.type == 'required' && <span className="text-red-500">password is required</span>}

                {errors.password?.type == 'minLength' && <span className="text-red-500">password must be 6 character</span>}

                {errors.password?.type == 'maxLength' && <span className="text-red-500">password must be length 20 character</span>}

                {errors.password?.type == 'pattern' && <span className="text-red-500">password will be follow pattern</span>}

                <input type="submit" value="Sing Up" className="btn btn-neutral mt-4" />
              </fieldset>
            </form>
            <p className="text-center mb-2">Already registered?  <Link to={'/login'}> Go to log in</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;