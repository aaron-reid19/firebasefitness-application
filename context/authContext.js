"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../lib/firebase"

const AuthContext = createContext();

export function AuthProvider({children}){
    const [ authUser, setAuthUser ] = useState(null)
    const [ loading, setLoading ] =  useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                if (user){
                    console.log("User Authenticated", user.email)
                }
                else {
                    console.log("no user Found")
                }
                setAuthUser(user);
                setLoading(false)
                console.log("loading complete")
            },
            (error) => {
                console.log("authentication error", error)
                setAuthUser(null)
                setLoading(false)
            }
        )
        return () => {
            console.log("cleaning up listener")
            unsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={{authUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined){
        throw new Error("context error")
    }
    return context;
}