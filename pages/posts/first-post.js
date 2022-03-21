
import Link from "next/link";
// 导入Head组件来修改head信息
import Head from "next/head";

// 导入Script 组件 可以优化第三方script的加载，按需加载script
import Script from "next/script";

// 导入自定义组件
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
        // 使用自定义布局组件
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            {/* 
            strategy:控制何时应加载第三方脚本
            onLoad: 当第三方脚本加载完成时的回调

             */}
            <Script 
                src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"
                strategy="lazyOnload"
                onLoad={()=>{
                    console.log(`jquery 已经加载完成`,$);
                }}

            />
            <h1>First Post</h1>
            <h2>
                <Link href={'/'}>
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    );
}