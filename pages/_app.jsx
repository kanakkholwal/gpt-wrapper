import '@mdxeditor/editor/style.css';
import "aos/dist/aos.css";
import Head from "next/head";
import Script from 'next/script';
import "src/global.scss";
import "src/tailwind.css";

import Progress from 'components/progress';
import { UserPreferenceProvider } from "hooks/useUserPreference";
import { SessionProvider } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

// import { Plus_Jakarta_Sans } from "next/font/google";

// const customFont = Plus_Jakarta_Sans({
//     weight: ['400', '500', '600', '700', '800'],
//     subsets: ['latin-ext', 'latin'],
//     display: 'swap',
//     adjustFontFallback: false,
//     variable: '--plus-jakarta',
//     fallback:['system-ui','sans-serif']
// })

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {

    const [isAnimating, setIsAnimating] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            setIsAnimating(true);
        };
        const handleStop = () => {
            setIsAnimating(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);

    return <>
        <Head>
            {/* <!-- Preload Cdns --> */}
            <link href='https://fonts.googleapis.com' rel='preconnect' />
            <link crossOrigin='' href='https://fonts.gstatic.com' rel='preconnect' />
            <meta name="googlebot" content="all" />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* <link rel="manifest" href="/manifest.json" /> */}
            <meta name="theme-color" content="#11a6d3" />
            <link rel="apple-touch-icon" href="/favicon.ico" />

        </Head>
        <Progress isAnimating={isAnimating} />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-BCVK6GWZ0E" />

        <Script id='google-analytics'
            strategy="afterInteractive" >
            {`
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCVK6GWZ0E', {
            page_path: window.location.pathname,
         });
        `}
        </Script>
        <SessionProvider session={session}>
            <UserPreferenceProvider>
            {/* <main className={customFont.className}> */}
                <Component {...pageProps} />
            {/* </main> */}
            </UserPreferenceProvider>
        </SessionProvider>
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                style: {
                    background: '#363636',
                    color: '#fff',
                },
                // Default options for specific types
                success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },
            }}
        />
    </>
}