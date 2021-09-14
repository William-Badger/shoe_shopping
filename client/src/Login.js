import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" placeholder="Username..."/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="Password..." />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
