import Link from 'next/link';
import React, { useEffect } from 'react';
import useAuthentication from '@/lib/hooks/useAuthentication';
import { useRouter } from 'next/router';
import Meta from '@/components/Meta';

export default function Login() {
    const router = useRouter()
    const { signInWithGoogle, user } = useAuthentication()

    /**
    * If the user is already logged in we navigate to the app.
    */
    useEffect(() => {
        if (user != null) {
            router.push("/waitinglist")
        }
    }, [user, router])

    return (
        <>
            <Meta title='Sign in | Tailwindgrabber' />
            <section className=" bg-opacity-30 min-h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        <img className="w-48 h-auto" src={process.env.LOGO_URL} alt="logo" />
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl ">
                                Log in or sign up in seconds
                            </h1>

                            <p className='text-md font-light text-gray-500 text-center '>
                                Login or create an account to join the waitlist
                            </p>

                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    onClick={signInWithGoogle}
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign in with Google
                                </button>

                                <Link
                                    href="./email"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                                        </svg>
                                    </div>
                                    Sign in with email
                                </Link>
                            </div>

                            <p className="text-sm font-light text-gray-500 text-center ">
                                When creating a new account, you agree to the terms & conditions and privacy policy .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}



