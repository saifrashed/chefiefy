import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, User, sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth, firebaseApp } from "@/initFirebase";

function useAuthentication() {
    const router = useRouter();
    const auth = firebaseAuth;
    const [user, setUser] = useState<User | null>(null)

    /**
     * This useEffect checks if a user is logged in and sets the state with the user data if this is the case.
     */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, you can perform additional actions if needed
                setUser(user);
                // console.log(user);
                console.log("Logged in.")
            } else {
                // User is signed out, you can perform additional actions if needed
                setUser(null);
                console.log("Not logged in.")
            }
        });

        return () => unsubscribe();
    }, [auth]);


    const signUp = async (email: string, password: string) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            router.push("/app"); // Replace "/" with your desired route after successful registration
        } catch (error) {
            console.log(error);
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            router.push("/app"); // Replace "/" with your desired route after successful login
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, provider);
            router.push("/app"); // Replace "/" with your desired route after successful login
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null)
        } catch (error) {
            console.log(error);
        }
    };

    const resetPassword = async (email: string) => {
        try {
            const response = await sendPasswordResetEmail(auth, email);
            router.back()
        } catch (error) {
            console.log(error);
        }
    }

    return {
        user,
        signIn,
        signUp,
        logout,
        signInWithGoogle,
        resetPassword
    };
}

export default useAuthentication;
