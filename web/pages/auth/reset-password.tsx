import React from "react";
import Link from "next/link";
import useAuthentication from '@/lib/hooks/useAuthentication';
import Meta from "@/components/Meta";

export default function ResetPassword() {
    const { resetPassword } = useAuthentication()

    const handleResetPassword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        // });

        resetPassword(data.get('email')!.toString());
    };

    return (
        <>
            <Meta title='Reset your Password | Hijab AI' />

            <section className="bg-secondary bg-opacity-30 min-h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        <img src={process.env.LOGO_URL} alt="logo" />
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl ">
                                Forgot your password?
                            </h1>

                            <p className='text-md font-light text-gray-500 text-center '>
                                Reset your password
                            </p>


                            <form className="space-y-4 md:space-y-6" onSubmit={handleResetPassword}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
                                </div>

                                <button type="submit" className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                    Send mail
                                </button>
                                <p className="text-sm text-center font-light text-gray-500 ">
                                    Follow the instructions send to your mailbox.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}