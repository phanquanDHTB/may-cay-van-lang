import "@/styles/globals.css";
import DefaultLayout from "@/components/DefaulLayout";

export default function App({ Component, pageProps }) {
    const Layout = DefaultLayout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
