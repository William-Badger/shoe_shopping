import React from 'react';
import { useHistory } from "react-router-dom"


const Login = () => {

    let history = useHistory();
    console.log(history);

    function handleClick() {
        history.push('/home')
    }


    return (
        <div>
            <h1>Welcome to Foot Rocker</h1>
            <br/>
            <form>
                <h3>Become a user!</h3>
                <label>
                    <p>E-mail:</p>
                    <input type="text" placeholder="E-mail..."/>
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" placeholder="Password..." />
                </label>
                <div>
                    <button type="submit">Login</button>
                    <button type="submit">Signup</button>
                </div>
            </form>
            <div>
                <button onClick= {handleClick()}>
                    <input 
                    type="checkbox" name="seller?" value="Yes" />Become a Seller?
                </button>
            </div>
        </div>
    );
}

export default Login;
