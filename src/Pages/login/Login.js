import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    console.log(user);
  }

  return (
    <div className=" w-96 mx-auto my-20">
      <div className=" shadow-2xl card-body">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent text-lg font-normal">Login</button>
        </div>
        <div className="flex text-center">
          <p className="">New to Doctors Portal?</p>{" "}
          <Link className="text-primary" to="/signup">
            {" "}
            Create new account{" "}
          </Link>
        </div>
        <div className="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline btn-accent"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
