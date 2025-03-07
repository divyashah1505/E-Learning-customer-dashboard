// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./LogIn.css"; // Adjust the path as necessary
// import auth from "./useAuth"; // Adjust the path as per your project structure
// import Logo from "../IMAGES/Logo (Resize).png"; // Adjust the image path as necessary
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import { BASE_URL } from "../../config/config"; // Import BASE_URL from config

// const LogIn = () => {
//   const navigate = useNavigate();
//   const { signIn } = auth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(`${BASE_URL}/clogin`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email_address: email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         signIn(email, password); // Adjust as per your auth context or remove if not applicable
//         toast.success(data.message || "Login successful!", { autoClose: 2000 });

//         // Store customer name in local storage
//         localStorage.setItem("customerName", data.customerName);

//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       } else {
//         toast.error(data.message || "Login failed. Please try again.", { autoClose: 5000 });
//       }
//     } catch (error) {
//       console.error("Error connecting to the server", error);
//       toast.error("Internal server error", { autoClose: 5000 });
//     }
//   };

//   return (
//     <div className="log-in">
//       <div className="logInContainer">
//         <div className="logo text-center">
//           <img src={Logo} alt="Logo" />
//         </div>
//         <form onSubmit={handleSubmit} className="login-form">
//           <h1 className="lead text-center text-dark">Login</h1>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faEnvelope} />
//             <input
//               type="text"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="theme-input-style"
//               required
//               placeholder="Email"
//             />
//           </div>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faLock} />
//             <input
//               type="password"
//               autoComplete="on"
//               required
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="theme-input-style"
//               placeholder="Password"
//             />
//           </div>
//           <label className="checkBoxLabel">
//             <input type="checkbox" className="checkBox" />
//             Remember Me
//           </label>
//           <div className="form-group">
//             <button className="logInBTN" type="submit">
//               Sign In
//             </button>
//           </div>
//           <div className="option text-center">
//             <label>Don't have an Account? &ensp;</label>
//             <Link to="/signup">
//               <span>Register Here</span>
//             </Link>
//           </div>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default LogIn;












// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./LogIn.css"; // Adjust the path as necessary
// import auth from "./useAuth"; // Adjust the path as per your project structure
// import Logo from "../IMAGES/Logo (Resize).png"; // Adjust the image path as necessary
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import { BASE_URL } from "../../config/config"; // Import BASE_URL from config

// const LogIn = () => {
//   const navigate = useNavigate();
//   const { signIn } = auth(); // Adjust if using a different auth context
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(`${BASE_URL}/clogin`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email_address: email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Storing token and customerName in local storage
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("customerName", data.customerName);

//         signIn(email, password); // Adjust as per your auth context or remove if not applicable
//         toast.success(data.message || "Login successful!", { autoClose: 2000 });

//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       } else {
//         toast.error(data.message || "Login failed. Please try again.", { autoClose: 5000 });
//       }
//     } catch (error) {
//       console.error("Error connecting to the server", error);
//       toast.error("Internal server error", { autoClose: 5000 });
//     }
//   };

//   return (
//     <div className="log-in">
//       <div className="logInContainer">
//         <div className="logo text-center">
//           <img src={Logo} alt="Logo" />
//         </div>
//         <form onSubmit={handleSubmit} className="login-form">
//           <h1 className="lead text-center text-dark">Login</h1>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faEnvelope} />
//             <input
//               type="text"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="theme-input-style"
//               required
//               placeholder="Email"
//             />
//           </div>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faLock} />
//             <input
//               type="password"
//               autoComplete="on"
//               required
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="theme-input-style"
//               placeholder="Password"
//             />
//           </div>
//           <label className="checkBoxLabel">
//             <input type="checkbox" className="checkBox" />
//             Remember Me
//           </label>
//           <div className="form-group">
//             <button className="logInBTN" type="submit">
//               Sign In
//             </button>
//           </div>
//           <div className="option text-center">
//             <label>Don't have an Account? &ensp;</label>
//             <Link to="/signup">
//               <span>Register Here</span>
//             </Link>
//           </div>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default LogIn;












import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogIn.css"; 
import auth from "./useAuth"; 
import Logo from "../IMAGES/Logo (Resize).png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from "../../config/config"; 

const LogIn = () => {
  const navigate = useNavigate();
  const { signIn } = auth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/clogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("customerName", data.customerName);
        localStorage.setItem("customerId", data.id); 

        signIn(email, password); 
        toast.success(data.message || "Login successful!", { autoClose: 2000 });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.message || "Login failed. Please try again.", { autoClose: 5000 });
      }
    } catch (error) {
      console.error("Error connecting to the server", error);
      toast.error("Internal server error", { autoClose: 5000 });
    }
  };

  return (
    <div className="log-in">
      <div className="logInContainer">
        <div className="logo text-center">
          <img src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="lead text-center text-dark">Login</h1>
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="theme-input-style"
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              autoComplete="on"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="theme-input-style"
              placeholder="Password"
            />
          </div>
          {/* <label className="checkBoxLabel">
            <input type="checkbox" className="checkBox" />
            Remember Me
          </label> */}
          <div className="form-group">
            <button className="logInBTN" type="submit">
              Sign In
            </button>
          </div>
          <div className="option text-center">
            <label>Don't have an Account? &ensp;</label>
            <Link to="/signup">
              <span>Register Here</span>
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LogIn;
