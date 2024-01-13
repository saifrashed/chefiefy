import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <div className="grid h-screen px-4 place-content-center text-white">
                <div className="text-center">
                    <h1 className="font-black text-9xl">404</h1>
                    <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
                    <p className="my-4">This page could not be found</p>
                    <Link href="/">
                        <button className="inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-sky-500 px-8 py-4 text-base font-bold leading-6 text-white transition-all hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-auto">
                            Return
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;