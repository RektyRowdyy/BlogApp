import { useState } from "react";
import "./Login.css"
import { Navigate } from "react-router-dom";

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);

    async function login(e) {

        e.preventDefault();

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // include the cookies
        })

        if(response.ok) {
            setRedirect(true)
        }
        else {
            alert("Wrong Credentials")
        }

    }

    if(redirect) {
        return <Navigate to={'/'} />
    }

    return(
        <>
            <form className="login" onSubmit={login}>
                <h1>Login</h1>
                <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login