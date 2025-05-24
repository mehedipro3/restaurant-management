import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {
  const { SingIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);

  }, [])

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }

  }
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    SingIn(email, password)
      .then(result => {
        Swal.fire({
          title: "User LogIn Successfully",
          icon: "success",
          draggable: true
        });
        console.log(result.user);
      });

      navigate(from , {replace : true});

  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login </title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <LoadCanvasTemplate />
                <input type="text" onBlur={handleValidateCaptcha} name="captcha" className="input" placeholder="Type the captcha" />
                <input disabled={false} className="btn btn-neutral mt-4" type="submit" value="Login" />
              </fieldset>
            </form>
            <p className='text-center my-1'>New Here? <Link to={"/singUp"}>Create an Account</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;