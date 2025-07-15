import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../component/FoodCard/SocialLogin";

const SingUp = () => {

  const axiosPublic = useAxiosPublic();
  const { CreateUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    CreateUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  console.log('user added to the database')

                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your are successfully login",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                }
              })
          })
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
            <SocialLogin ></SocialLogin>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default SingUp;