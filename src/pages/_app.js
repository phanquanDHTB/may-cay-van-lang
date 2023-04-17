import "@/styles/globals.css";
import "animate.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="../../images/ricardo-milos-1.jpg" />
                <title>Van Lang Agriculture Machine</title>
                <meta charset="UTF-8" />
                <meta name="description" content="Van Lang Agriculture Machine" />
                <meta name="description" content="Máy cấy Văn Lang" />
                <meta
                    name="keywords"
                    content="Van Lang, Agriculture Machine, Agrimac, Máy cấy Văn Lang, máy cấy lúa, Văn Lang0"
                />
                <meta name="author" content="Van Lang" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
