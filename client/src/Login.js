import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom"


const Login = () => {

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');

    let history = useHistory();

    function signUp() {
        fetch('http://localhost:3000/users', {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            email: newEmail,
            password: newPassword
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))

        history.push('/home')
    }
    
    function logIn() {
        fetch('http://localhost:3000/sessions',{
        method: "GET",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))

        history.push('/home')
    }




    return (
        <div>
            <h1>Welcome to Foot Rocker</h1>
            <div>
            <form onSubmit = {logIn}>
                <h3>Login!</h3>
                <label>
                    <p>Username:</p>
                    <input
                    value = {name}
                    onChange ={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Userame..."
                    required
                    />
                </label>
                <label>
                    <p>E-mail:</p>
                    <input 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    type="text" 
                    placeholder="E-mail..."
                    required
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 

                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password..." 
                    required
                    />
                </label>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            </div>
            <div>
            <form onSubmit = {signUp}>
                <h3>Become a user!</h3>
                <label>
                    <p>New Userame:</p>
                    <input
                    value = {newName}
                    onChange ={(e) => setNewName(e.target.value)}
                    type="text"
                    placeholder="Username..."
                    required
                    />
                </label>
                <label>
                    <p>E-mail:</p>
                    <input 
                    value = {newEmail}
                    onChange = {(e) => setNewEmail(e.target.value)}
                    type="text" 
                    placeholder="New E-mail..."
                    required
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 

                    value = {newPassword}
                    onChange = {(e) => setNewPassword(e.target.value)}
                    type="password" 
                    placeholder="New Password..." 
                    required
                    />
                </label>
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
            <div>
                <button type="submit">
                    <input 
                    type="checkbox" name="seller?" value="Yes" />Become a Seller?
                </button>
            </div>
            </div>
        </div>
    );
}

export default Login;
