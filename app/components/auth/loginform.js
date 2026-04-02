"use client"
import { useState } from "react";
import { login } from "@/lib/auth"

export default function Login() {
    // setup state for login page
    // email state for form
    const [ email, setEmail ] = useState("");
    // password state for form
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false);
    const [ success, setSuccess ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true)
        setSuccess(false)

        const {user, error} = await login(email,password)
        if (error) {
            setError(true)
            setLoading(false)
            retrun
        }

        if (user){
            setSuccess(true)
            setEmail("")
            setPassword("")
        }
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login-email">
                        Email
                    </label>
                    <input 
                    value={email}
                    name="login-email"
                    type="email"
                    id="login-email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="login-password">
                        Password
                    </label>
                    <input 
                    value={password}
                    name="login-password"
                    type="password"
                    id="loginpassword"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>

                {error && (
                    <div>{error}</div>
                )}

                <button
                type="submit"
                disabled={loading}
                >
                    {loading ? "Logging in" : "Login" }
                </button>
            </form>
        </div>
    )
}