import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
	  useEffect(() => {
		ldispatch({ type: "LOGIN_START" });
	  }, [])
	  
      const { loading, error, ldispatch } = useContext(AuthContext);
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
          console.log(e.target.value)
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        ldispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", credentials);
          console.log(res.data);
          ldispatch({ type: "LOGIN_SUCCESS", payload: res.data});
          navigate("/")
        } catch (err) {
          ldispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
      
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Login to Your Account</h1>
						<input
							 type="text"
                             placeholder="username"
                             id="username"
                             onChange={handleChange}
							className={styles.input}
						/>
						<input
						type="password"
                        placeholder="password"
                        id="password"
                        onChange={handleChange}
						className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error.message}</div>}
						<button type="submit" onClick={handleClick} className={styles.green_btn}>
							Log In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
