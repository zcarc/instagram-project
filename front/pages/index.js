import AppLayout from "../components/AppLayout";
import Head from "next/head";
import Link from 'next/link';

const Home = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/style/reset.css"/>
            </Head>
            <AppLayout>
                <div>
                    <h1>메인페이지</h1>
                    <Link href="/register"><a>회원가입</a></Link>
                </div>

            </AppLayout>
        </>
    );
};

export default Home;