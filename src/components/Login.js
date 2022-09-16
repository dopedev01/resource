import { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
import './form.css'

function Login() {
    const [inputs, setInputs] = useState({});
    const [isLogin,setisLogin]=useState(false);



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handle = (event) => {
        event.preventDefault();
        console.log(inputs);
        if (inputs.email === "admin@gmail.com" && inputs.password === '123456') {
            setisLogin(true)
             
            



        } else {
             alert("wrong credentials")
               
              
        }

    }

    return (
        <div>
            {!isLogin ?
            
            <div className="form">
             <h1>Admin Login</h1>
                <form onSubmit={handle}>
                <label>Email</label>
                <br/>
                    <input
                        type="email"
                        name="email"
                        value={inputs.email} 
                        onChange={handleChange}
                    />
                <br/>
                <label>Password</label>
                <br/>
                    <input id="la"
                        type="password"
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                <br/>
                <button id="btn" onClick={handle}>Login</button>
            </form> </div> 
            :
           <Nav/>}



        </div>
    )
}

export default Login;