import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChangeAccount= ({user, setUser}) => {

    let history = useHistory()
    
    const [changedEmail, setChangedEmail] = useState('');

    function changeEmail() {
    fetch(`/users/${user.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
     },
    body: JSON.stringify({
        email: changedEmail
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    history.push('/home')
    }

    function deleteUser(){
        fetch(`/users/${user.id}`, {
            method: "DELETE" })

            fetch('/logout', {
                method: 'DELETE' })
            .then(r => {

                if (r.ok) {
                    history.push('/')
                }
            });
            }

    return (
        <div>
            <div>
                Username: {user.name}
                <br/>
                
                Email: {user.email}
                <hr/>
            </div>
            <form onSubmit = {changeEmail}>
                <label>Change Email</label>
                <input 
                type='text'
                placeholder='new email'
                value = {changedEmail}
                onChange = {(e) => setChangedEmail(e.target.value)}
                required
                ></input>
                <button type="submit">Submit</button>
                </form>
                <br/>
            
            <button onClick = {deleteUser} > Delete Account</button>
        </div>
    );
}

export default ChangeAccount;
