import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

import Link from 'next/link'
import Date from '../components/date'

/*
getStaticProps 仅在服务端运行
它永远不会在客户端运行。它甚至不会包含在浏览器的 JS 包中。
这意味着您可以编写诸如直接数据库查询之类的代码，而无需将它们发送到浏览器。
此方法使用客户端渲染，在页面加载前去获取数据
*/
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>我是一个好的开发者，欢迎交流学习！！</p>
        <p>
          这是一个示例网站 - 您将在
          <a href="https://nextjs.org/learn">我们的 Next.js 教程</a>
          中构建这样的网站
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}