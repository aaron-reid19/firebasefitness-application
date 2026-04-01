"use client"
import { useState } from "react";

export default function Login() {
    // setup state for login page
    // email state for form
    const [ email, setEmail ] = useState("");
    // password state for form
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false);

    return(
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>
                        email
                    </label>
                </div>
            </form>
        </div>
    )
}