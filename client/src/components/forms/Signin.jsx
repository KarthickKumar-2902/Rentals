import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Signin = () => {
  const [otp, setOtp] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submit = (data) => {
    setOtp(5);
    console.log(data, otp);
    
  };

  return (
    <>
      <div className="container flex flex-col justify-center items-center min-h-screen ">
        <div className="signContainer rounded-lg bg-white shadow-2xl p-10 flex flex-col items-center max-w-md w-full">
          
          {/* Title */}
          <div className="title-head mb-8 text-4xl font-bold text-gray-800">Sign In</div>

          {/* Form */}
          <form className="w-full flex flex-col space-y-6" onSubmit={handleSubmit(submit)}>
            
            {/* Username Field */}
            <div className="text_input">
              <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username:</label>
              <input
                type="text"
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                name="username"
                id="u_name"
                placeholder="Enter your username or email"
                {...register("userName", { required: "Username is required" })}
              />
              {errors.userName && <div className="text-red-500 text-sm mt-1">{errors.userName.message}</div>}
            </div>

            {/* Password Field */}
            <div className="text_input">
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password:</label>
              <input
                type="password"
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                name="password"
                id="pass"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password.message}</div>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
