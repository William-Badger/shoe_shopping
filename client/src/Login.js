import React from 'react';


const Login = () => {

    function handleClick() {
        
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
                <form onClick= {handleClick()}>
                    <input type="checkbox" name="seller?" value="Yes" />Become a Seller?
                </form>
            </div>
        </div>
    );
}

export default Login;
