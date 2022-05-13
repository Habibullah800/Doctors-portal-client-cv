import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, navigate, from]);

  if (loading || gLoading) {
    return <Loading />;
  }

  let signInError;

  if (error || gError) {
    signInError = (
      <p className="text-red-500"> {error?.message || gError?.message} </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className=" w-96 mx-auto my-20">
      <div className=" shadow-2xl card-body">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },

                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500"> {errors.password.message} </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500"> {errors.password.message} </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {signInError}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn btn-accent text-lg font-normal"
            />
          </div>
        </form>

        <p className="text-center text-sm">
          New to Doctors Portal?{" "}
          <Link className="text-primary" to="/signup">
            {" "}
            Create new account{" "}
          </Link>
        </p>

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
