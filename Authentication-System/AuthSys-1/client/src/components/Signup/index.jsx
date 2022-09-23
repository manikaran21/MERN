import styles from './styles.module.css' ;

import React ,{ useState } from 'react' ;
import { Link , useNavigate } from 'react-router-dom' ;
import axios from 'axios' ;

const Signup = () => {
    const [data , setData ] = useState({
        firstName:"" ,
        lastName:"" ,
        email:"" ,
        password:""
    }) ;
    const [error ,setError] = useState("") ;
    const navigate = useNavigate() ;
    const handleChange = (e) => {
        setData({
            ...data , [e.target.name]:e.target.value
        }) ;
    }
    const handleSubmit = async (e) => {
        e.preventDefault() ;
        try{
            console.log("hello manikaran ")
            const url = "http://localhost:8080/api/users" ;
            const res = await axios.post(url,data) ;
            console.log(res) ;
            navigate("/login") ;
           
        }catch(err){
            if(err.response &&
               err.response.status >= 400 &&
               err.response.status<=500){


               setError(err.response.data.message) ;

            }
        }
    }

  return (
    <div className = {styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>Welcome Back</h1>
                <Link to='/login'>
                    <button type="button" className={styles.white_btn}>
                        Sign in
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form onSubmit={handleSubmit}  className={styles.form_container}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        placeholder='First Name'
                        name='firstName'
                        onChange={handleChange}
                        value={data.firstName}
                        className={styles.input}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Last Name'
                        name='lastName'
                        onChange={handleChange}
                        value={data.lastName}
                        className={styles.input}
                        required
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                        value={data.email}
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={data.password}
                        className={styles.input}
                        required
                    />
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className={styles.green_btn}>
                        Sign Up
                    </button>
                </form>
            </div>

        </div>

    </div>
  )
}

export default Signup ;