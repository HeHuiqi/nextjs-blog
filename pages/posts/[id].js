// 注意改文件名 [id].js 是需要传递id参数到此页面的

import Layout from '../../components/layout'
import Head from 'next/head'


import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

import utilStyles from '../../styles/utils.module.css'


//配置路径
// 如果fallback是false，则任何没匹配的path都将重定向到404页面。
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    // params将获取查询参数
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

  export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }