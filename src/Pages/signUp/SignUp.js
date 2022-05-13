import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, upError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  let signInError;

  if (error || gError || upError) {
    signInError = (
      <p className="text-red-500">
        {" "}
        {error?.message || gError?.message || upError?.message}{" "}
      </p>
    );
  }

  if (user || gUser) {
    console.log(user);
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    navigate("/appointment");
  };

  return (
    <div className=" w-96 mx-auto my-20">
      <div className=" shadow-2xl card-body">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
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
          </div>
          {signInError}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-accent text-lg font-normal"
            />
          </div>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            {" "}
            Login{" "}
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

export default SignUp;
