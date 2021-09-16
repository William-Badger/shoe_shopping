import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom"


const Login = ({setUser}) => {

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');

    let history = useHistory();

    function signUp() {

        const signup = {
            name: newName,
            email: newEmail,
            password: newPassword,
            is_seller: true
        }

        fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup)
    })
    .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
        
    }
    
    function logIn() {

        const logup = {
            name: name,
            email: email,
            password: password
        }

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(logup)
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => setUser(user));
            }
          })
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
                    placeholder="Username..."
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
            </div>
        </div>
    );
}

export default Login;
