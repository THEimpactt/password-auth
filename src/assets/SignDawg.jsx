import React, { useState } from "react";
import "./SIGNup.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignDawg() {
  const [addmail, setAddmail] = useState("");
  const [addpass, setAddpass] = useState("");
  const [strength, setStrength] = useState("");
  const [showPass, setShowpass] = useState(false);

  const navigate = useNavigate();

  const checkPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return "Weak";
    if (score <= 3) return "Medium";
    return "Strong";
  };

  const handleEvent = async (e) => {
    e.preventDefault();

    if (strength === "Weak") {
      toast.info("Password is too weak");
      setTimeout(1800);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, addmail, addpass);
      console.log("Signup Success");
      toast.success("Sign Up successful!");
      setTimeout(2000);
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists. Please login.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password is too weak.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h1>Password Authentication</h1>
      <div className="main">
        <form className="real-pt" onSubmit={handleEvent}>
          <h2>Sign Up</h2>

          <label>
            Email:
            <input
              type="email"
              onChange={(e) => setAddmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <div className="wrap">
              <input
                type={showPass ? "text" : "password"}
                onChange={(e) => {
                  const value = e.target.value;
                  setAddpass(value);
                  setStrength(checkPasswordStrength(value));
                }}
                required
              />
              <button
                id="showbtn"
                type="button"
                onClick={() => setShowpass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <p
            style={{
              color:
                strength === "Weak"
                  ? "red"
                  : strength === "Medium"
                  ? "orange"
                  : "green",
            }}
          >
            Password strength: {strength}
          </p>

          <button type="submit">Sign Up</button>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
