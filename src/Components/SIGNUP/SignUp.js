// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SignUp.css"; // Ensure this path matches your file structure
// import Logo from "../IMAGES/Logo (Resize).png"; // Ensure the image path is correct
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';



// const SignUp = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const password = watch("password");
//   const confirmPassword = watch("confirm-password");

//   const onSubmit = async (data) => {
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match", { autoClose: 2000, className: "toast-error" });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://55bc-2405-201-2009-d9ed-d494-8f6d-7f2f-1cfd.ngrok-free.app/register",
//         {
//           full_name: data.full_name,
//           email_address: data.email_address,
//           phone_number: data.phone_number,
//           password: data.password,
//         },
//         { withCredentials: true }
//       );

//       if (response.status === 201) {
//         toast.success("Registration Successful. Redirecting to homepage...", {
//           autoClose: 2000,
//           className: "toast-success",
//         });

//         // Wait for 2 seconds before navigating
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       }
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.error, { autoClose: 2000, className: "toast-error" });
//       } else {
//         toast.error("Registration failed", { autoClose: 2000, className: "toast-error" });
//       }
//     }
//   };

//   return (
//     <div className="sign-up">
//       <div className="container">
//         <div className="logo text-center">
//           <img src={Logo} alt="Logo" />
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="py-2">
//           <h1 className="lead text-center text-dark">Create an Account</h1>

//           <div className="form-group">
//             <FontAwesomeIcon icon={faUser} className="signUp-icon" />
//             <input
//               {...register("full_name")}
//               placeholder="Full Name"
//               className="form-control"
//               required
//               type="text"
//             />
//             {errors.full_name && <p className="text-danger">{errors.full_name.message}</p>}
//           </div>

//           <div className="form-group">
//           <FontAwesomeIcon icon={faEnvelope} className="signUp-icon"/>
//             <input
//               {...register("email_address")}
//               placeholder="Email"
//               required
//               className="form-control"
//             />
//             {errors.email_address && <p className="text-danger">{errors.email_address.message}</p>}
//           </div>

//           <div className="form-group">
//           <FontAwesomeIcon icon={faPhone} className="signUp-icon" />
//             <input
//               type="tel"
//               {...register("phone_number")}
//               placeholder="Phone Number"
//               required
//               className="form-control"
//             />
//             {errors.phone_number && <p className="text-danger">{errors.phone_number.message}</p>}
//           </div>

//           <div className="form-group">
//           <FontAwesomeIcon icon={faLock} className="signUp-icon"/>
//             <input
//               type="password"
//               {...register("password")}
//               placeholder="Password"
//               required
//               className="form-control"
//             />
//             {errors.password && <p className="text-danger">{errors.password.message}</p>}
//           </div>

//           <div className="form-group">
//           <FontAwesomeIcon icon={faLock} className="signUp-icon"/>
//             <input
//               type="password"
//               {...register("confirm-password")}
//               required
//               placeholder="Confirm Password"
//               className="form-control"
//             />
//             {errors["confirm-password"] && <p className="text-danger">{errors["confirm-password"].message}</p>}
//           </div>

//           <div className="form-group">
//             <button className="btn btn-block" type="submit">
//               Sign Up
//             </button>
//           </div>
//           <div className="option text-center">
//             <label className="text-dark">Already have an Account? &ensp;</label>
//             <Link to="/login">
//               <span>Log In</span>
//             </Link>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;


// SignUp.js
// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SignUp.css"; // Adjust the path as necessary
// import Logo from "../IMAGES/Logo (Resize).png"; // Adjust the image path as necessary
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const {handleSubmit, watch, formState: { errors } } = useForm();
//   const password = watch("password");
//   const confirmPassword = watch("confirm-password");

//   const onSubmit = async (data) => {
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match", { autoClose: 2000, className: "toast-error" });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://9ef3-2405-201-2009-d9ed-c44b-622-a218-4709.ngrok-free.app/register", // Update this URL as needed
//         {
//           full_name: data.full_name,
//           email_address: data.email_address,
//           phone_number: data.phone_number,
//           password: data.password,
//         },
//         { withCredentials: true }
//       );

//       if (response.data.message) {
//         toast.success("Registration Successful. Redirecting to homepage...", {
//           autoClose: 2000,
//           className: "toast-success",
//         });
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.error || "Registration failed";
//       toast.error(errorMessage, { autoClose: 2000, className: "toast-error" });
//     }
//   };

//   return (
//     <div className="sign-up">
//       <div className="container">
//         <div className="logo text-center">
//           <img src={Logo} alt="Logo" />
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="py-2">
//           <h1 className="lead text-center text-dark">Create an Account</h1>

//           <div className="form-group">
//             <FontAwesomeIcon icon={faUser} className="signUp-icon" />
//             <input
//               required
//               placeholder="Full Name"
//               className="theme-input-style"
//               type="text"
//             />
//             {errors.full_name && <p className="text-danger">{errors.full_name.message}</p>}
//           </div>

//           <div className="form-group">
//             <FontAwesomeIcon icon={faEnvelope} className="signUp-icon"/>
//             <input
//               required
//               placeholder="Email"
//               className="theme-input-style"
//               type="text"
//             />
//             {errors.email_address && <p className="text-danger">{errors.email_address.message}</p>}
//           </div>

//           <div className="form-group">
//             <FontAwesomeIcon icon={faPhone} className="signUp-icon" />
//             <input
//               type="tel"
//               required
//               placeholder="Phone Number"
//               className="theme-input-style"
//             />
//             {errors.phone_number && <p className="text-danger">{errors.phone_number.message}</p>}
//           </div>

//           <div className="form-group">
//             <FontAwesomeIcon icon={faLock} className="signUp-icon"/>
//             <input
//               type="password"
//               required
//               placeholder="Password"
//               className="theme-input-style"
//             />
//             {errors.password && <p className="text-danger">{errors.password.message}</p>}
//           </div>

//           <div className="form-group">
//             <FontAwesomeIcon icon={faLock} className="signUp-icon"/>
//             <input
//               type="password"
//               required
//               placeholder="Confirm Password"
//               className="theme-input-style"
//             />
//             {errors["confirm-password"] && <p className="text-danger">{errors["confirm-password"].message}</p>}
//           </div>

//           <div className="form-group">
//             <button className="signUpBTN" type="submit">
//               Sign Up
//             </button>
//           </div>
//           <div className="option text-center">
//             <label className="text-dark">Already have an Account? &ensp;</label>
//             <Link to="/login">
//               <span>Log In</span>
//             </Link>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;



import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css"; // Adjust the path as necessary
import Logo from "../IMAGES/Logo (Resize).png"; // Adjust the image path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import {BASE_URL} from "../../config/config";


const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const confirmPassword = watch("confirm-password");

  const onSubmit = async (data) => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { autoClose: 2000, className: "toast-error" });
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/register`, // Update this URL as needed
        {
          full_name: data.full_name,
          email_address: data.email_address,
          phone_number: data.phone_number,
          password: data.password,
          // Include additional fields as required
        },
        { withCredentials: true }
      );

      // You can adjust the condition based on your backend response
      if (response.status === 201 || response.data.message) {
        toast.success("Registration Successful. Redirecting to homepage...", {
          autoClose: 2000,
          className: "toast-success",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Registration failed";
      toast.error(errorMessage, { autoClose: 2000, className: "toast-error" });
    }
  };

  return (
    <div className="sign-up">
      <div className="container">
        <div className="logo text-center">
          <img src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="py-2">
          <h1 className="lead text-center text-dark">Create an Account</h1>
          
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} className="signUp-icon" />
            <input
              {...register("full_name", { required: "Full Name is required" })}
              placeholder="Full Name"
              className="theme-input-style"
              type="text"
            />
            {errors.full_name && <p className="text-danger">{errors.full_name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} className="signUp-icon"/>
            <input
              {...register("email_address", { required: "Email is required" })}
              placeholder="Email"
              className="theme-input-style"
              type="email"
            />
            {errors.email_address && <p className="text-danger">{errors.email_address.message}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="form-group">
            <FontAwesomeIcon icon={faPhone} className="signUp-icon" />
            <input
              {...register("phone_number", { required: "Phone Number is required" })}
              type="tel"
              placeholder="Phone Number"
              className="theme-input-style"
            />
            {errors.phone_number && <p className="text-danger">{errors.phone_number.message}</p>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <FontAwesomeIcon icon={faLock} className="signUp-icon"/>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="theme-input-style"
            />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <FontAwesomeIcon icon={faLock} className="signUp-icon"/>
            <input
              {...register("confirm-password", { required: "Confirm Password is required" })}
              type="password"
              placeholder="Confirm Password"
              className="theme-input-style"
            />
            {errors["confirm-password"] && <p className="text-danger">{errors["confirm-password"].message}</p>}
          </div>

          {/* Sign Up Button */}
          <div className="form-group">
            <button className="signUpBTN" type="submit">
              Sign Up
            </button>
          </div>
          <div className="option text-center">
            <label className="text-dark">Already have an Account? &ensp;</label>
            <Link to="/login">
              <span>Log In</span>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
