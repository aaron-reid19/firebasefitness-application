"use client"
import { useState } from "react"
import { signup } from "@/lib/auth"

export default function sSignupForm(){
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ success, setSuccess ] = useState(false)
    const [ error, setError] = useState(null)
    const [ loading, setLoading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(false)
        setLoading(true)


        const { user, error } = await signup(email, password)
        if (error){
            setError(error)
            setLoading(false)
            return;
        }

        if (user) {
            setSuccess(true)
            setEmail("")
            setPassword("")
        }
        setLoading(false);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="signup-email">Email</label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="signup-email"
                id="signup-email"
                required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="signup-password"
                id="signup-password"
                />
            </div>
            {error && <div>{error}</div>}
            {success && <div>Account created succesfully</div>}
            <button
            disabled={loading}
            type="submit">
                {loading ? "creating account..." : "signup"}
            </button>
        </form>
    )
}