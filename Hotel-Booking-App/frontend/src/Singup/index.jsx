import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [data, setData] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const { error, ldispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", data);
      console.log(res.data);
      navigate("/login");
      //   dispatch({ type: "LOGIN_START" });
    } catch (err) {
      ldispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  console.log(error);
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Log in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="User Name"
              id="username"
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error.message}</div>}
            <button
              type="submit"
              onClick={handleClick}
              className={styles.green_btn}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
