import { useState } from "react"
import "./Register.css"

function Register() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    async function register(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type': 'application/json'},
        })

        if(response.ok) {
            alert("Registration Successful")
        } else {
            alert("Registration Failed!")
        }
    }

    return(
        <>
            <form className="register" onSubmit={register}>
                <h1>Register</h1>
                <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <button>Register</button>
            </form>
        </>
    )
}

export default Register