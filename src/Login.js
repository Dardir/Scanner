import React, { useState } from 'react';
import './Login.css';
import base64 from 'base-64';
import axios from 'axios';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [loginData, setLoginData] = useState({
        userId: '',
        password: ''
    });


    const updateField = e => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = e => {
        e.preventDefault();
        signIn();
    }

    async function signIn() {
        const url = process.env.REACT_APP_SIGNIN_URL;
        console.log("Calling the following URL to login");
        console.log(url);
        axios.post(url, {
            userId: loginData.userId,
            password: loginData.password
        })
            .then(({ data }) => {
                console.dir(data);
                if(data.entry && data.entry.id){
                setErrorMessage(null);
                const token = data.entry.id;
                const encodedToken = base64.encode(token);
                localStorage.setItem('token', encodedToken);
                //Redirect to Home page
                } else{
                    setErrorMessage("Not Authorized User");
                }
            }, (error) => {
                setErrorMessage(error.message);
            })
    }
    return (
        <div id="bg">
            <form>
                <label htmlFor=""></label>
                <input type="text" name="userId" id="userId" placeholder="User Name" className="email" onChange={updateField} />
                <label htmlFor=""></label>
                <input type="password" name="password" id="password" placeholder="password" className="pass" onChange={updateField} />
                <button onClick={handleClick}>login to your account</button>
                <div>
                {
                    (errorMessage) ? <div style={{ color: "red" }}>{errorMessage}</div> : <div></div>
                }
                </div>
            </form>
        </div>

    )

}
export default Login;