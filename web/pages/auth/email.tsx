import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useAuthentication from '@/lib/hooks/useAuthentication';
import Meta from '@/components/Meta';

export default function EmailLogin() {
    const router = useRouter()
    const { user, signIn, signUp } = useAuthentication()

    const [signupForm, setSignupForm] = useState<boolean>(false)
    const [loginForm, setLoginForm] = useState<boolean>(false)


    /**
     * If the user is already logged in we navigate to the app.
     */
    useEffect(() => {
        if (user != null) {
            router.push("/app")
        }
    }, [user, router])

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });

        signIn(data.get('email')!.toString(), data.get('password')!.toString());
    };

    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        //     confirmPassword: data.get('confirm-password'),
        // });

        if (data.get('password') != data.get('confirm-password')) {
            return console.log("Passwords don't match!")
        }

        signUp(data.get('email')!.toString(), data.get('password')!.toString());
    };

    return (
        <>
            <Meta title='Sign in with email | Tailwindgrabber' />
            <section className="bg-secondary bg-opacity-30 min-h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        <img src={process.env.LOGO_URL} className="w-48 h-auto" />
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl ">
                                Log in or sign up in seconds
                            </h1>

                            <p className='text-md font-light text-gray-500 text-center '>
                                Login or create an account to get started
                            </p>

                            {!signupForm && !loginForm && (
                                <div className="flex flex-col md:flex-row    md:justify-between ">
                                    <button
                                        type="button"
                                        onClick={() => { setLoginForm(true) }}
                                        className=" items-center h-full justify-center w-full px-2 m-2 py-2 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                    >

                                        I have an account
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => { setSignupForm(true) }}
                                        className="  items-center h-full justify-center w-full px-2 m-2 py-2 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                    >

                                        I&apos;m new here
                                    </button>
                                </div>
                            )}

                            {signupForm && (
                                <>
                                    <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                        </div>
                                        <div>
                                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                        </div>

                                        <p className="text-sm font-light text-gray-500 text-center ">
                                            When creating a new account, you agree to the terms & conditions and privacy policy .
                                        </p>
                                        <button type="submit" className="w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                                        <p className="text-sm text-center font-light text-gray-500">
                                            Already have an account? <button onClick={() => { setLoginForm(true); setSignupForm(false) }} className="font-medium text-primary-600 hover:underline ">Login here</button>
                                        </p>
                                    </form>
                                </>
                            )}

                            {loginForm && (
                                <>
                                    <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                        </div>
                                        <div className="flex items-center justify-between">

                                            <Link href={"/auth/reset-password"} className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</Link>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                                        <p className="text-sm text-center font-light text-gray-500 ">
                                            Don’t have an account yet? <button onClick={() => { setLoginForm(false); setSignupForm(true) }} className="font-medium text-primary-600 hover:underline 0">Sign up</button>
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}