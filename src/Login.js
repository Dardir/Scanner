import React from 'react';
import './Login.css';
import axios from 'axios';

const [errorMessage, setErrorMessage] = useState(null);
const [loginData, setLoginData] = useState({
    userId:'',
    password:''
});


const updateField = e => {
    setLoginData({
        ...loginData,
        [e.target.name]: e.target.value
    });
};

async function signIn() {
    const url = process.env.REACT_APP_SIGNIN_URL;
    console.log("Calling the following URL to login");
    console.log(url);
    axios.post(url, {
        userId: loginData.userId,
        password: loginData.password
    })
        .then(({ data }) => {
            setErrorMessage(null);
                // Get token
                //Encode to Base64
                //Redirect to Home page
        }, (error) => {
            setErrorMessage(error);
        })
}
const Login = () => {
    return (
        <div id="bg">
            <form action="">
                <label for=""></label>
                <input type="text" name="userId" id="" placeholder="User Name" className="email" onChange={updateField}/>
                <label for=""></label>
                <input type="password" name="password" id="" placeholder="password" className="pass" onChange={updateField}/>
                <button type="submit" onClick={signIn}>login to your account</button>
                {
                    (errorMessage) ? <div style={{ color: "red" }}>{errorMessage}</div> : <div></div>
                }
            </form>
        </div>

    )

}
export default Login;