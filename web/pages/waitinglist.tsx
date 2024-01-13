import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '@/components/Meta';

const Confirmation: React.FC = () => {
    return (
        <>
            <Meta title='Waitinglist Confirmation | Tailwindgrabber' />

            <div className="flex w-full flex-col items-center justify-center p-4 md:p-8 min-h-screen  text-black">
                <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    <img src={process.env.LOGO_URL} className="w-48 h-auto" />
                </Link>
                <div className="mx-auto mt-4 w-full max-w-lg">
                    <div className="relative p-5 text-center ">
                        <div className="flex items-center justify-center">
                            <div className="relative overflow-hidden rounded-full w-28 h-28">
                                <img className="object-cover w-full h-full" src="https://www.hijabai.com/images/checkmark-flat.png" alt="checkmark" />
                            </div>
                        </div>
                        <h2 className="my-8 text-3xl font-bold leading-tight text-white">You are in the waitinglist</h2>
                        <Link href="/">
                            <button type="submit" className="block w-full rounded-md bg-sky-400 py-3 px-4 font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">
                                Go to home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Confirmation;