
import Head from 'next/head'

interface MetaProps {
    title: string; // Provide the correct type for 'title', in this case, a string.
}

/**
 * The Meta tags
 *
 * @returns JSX for Meta tags
 */
const Meta: React.FC<MetaProps> = ({ title }) => {

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Effortlessly extract and share Tailwind elements from existing websites, enhancing your design workflow like never before." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0F172A" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d1b79f" />
            <meta name="msapplication-TileColor" content="#da532c" />

            <link rel="canonical" href={process.env.BASE_URL} />
            <meta name="robots" content="index, follow" />

            <meta property="og:title" content="Tailwindgrabber" />
            <meta property="og:description" content="An extension for effortless extraction of Tailwind elements." />
            <meta property="og:image" content="https://www.tailwindgrabber.com/images/og-image.jpeg" />
            <meta property="og:url" content="https://www.tailwindgrabber.com/" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="An extension for effortless extraction of Tailwind elements." />
            <meta name="twitter:title" content="Tailwindgrabber" />
            <meta name="twitter:description" content="Effortlessly extract and share Tailwind elements from existing websites, enhancing your design workflow like never before." />
            <meta name="twitter:image" content="https://www.tailwindgrabber.com/images/og-image.jpeg" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Oufaska Agency" />
            <meta name="language" content="en" />
        </Head>
    );
};

export default Meta;