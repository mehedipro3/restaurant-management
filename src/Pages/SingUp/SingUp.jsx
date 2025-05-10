import { Link } from "react-router";

const SingUp = () => {
  return (
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
          <div className="card-body">
            <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Sing Up</button>
            </fieldset>   
          </div>
          <p className="text-center mb-2">Already registered? <Link to={'/login'}> Go to log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;