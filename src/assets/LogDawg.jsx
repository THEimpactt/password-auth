import React, { useState } from "react";
import "./LOGin.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogDawg() {
  const [addmail, setAddmail] = useState("");
  const [addpass, setAddpass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, addmail, addpass);
      console.log("Login Success");
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Incorrect Email or Password");
      setTimeout(2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Password Authentication</h1>
      <div className="main">
        <form className="real-pt" onSubmit={handleEvent}>
          <h2>LOGIN</h2>
          <label id="mail">
            Email:
            <input
              type="email"
              id="email"
              onChange={(e) => setAddmail(e.target.value)}
              required
            />
          </label>
          <label id="pass">
            Password:
            <input
              type="password"
              id="password"
              onChange={(e) => setAddpass(e.target.value)}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? <div className="spinner"></div> : "Login"}
          </button>
          <Link to="/">Don't have an account?</Link>
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