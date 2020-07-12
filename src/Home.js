import React, {useEffect} from 'react';
import Background from './eg-flag.jpg';
import { Link } from 'react-router-dom';


const Home = (props) => {
    useEffect(() => {
        if(!localStorage.getItem('token')){
            console.log("No token - Redirect to Login")
            props.history.push('/login');
        }
    },[props.history]);
   const sectionStyle = {
        width: "100%",
        height: "670px",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover",
        backgroundColor: "transparent",
    };

    return (
        <div style={{ position: "relative", opacity: "0.75" }}>
            <section style={sectionStyle}>
                <Link to="/scan" style={{ color: "red", fontSize:"45px" ,  position: "fixed", top: "55%", left: "70%", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",textDecoration: "underline"}}>
                    <b>
                        مسح ضوئي
                    </b>
                </Link>
                <Link to="/search" style={{ color: "red", fontSize:"45px" ,  position: "fixed", top: "55%", left: "10%", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",textDecoration: "underline"}}>
                    <b>
                        البحث عن ملفات
                    </b>
                </Link>
            </section>
        </div>
    )

}
export default Home;