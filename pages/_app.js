// 在这里来定义整体App样式
// 此文件名必须是这个
/*
这个 App 组件是所有不同页面通用的顶级组件。 您可以使用此 App 组件在页面之间导航时保持状态
在 Next.js 中，您可以通过从"pages/_app.js"导入全局 CSS 文件来添加这些文件。
您无法在其他任何地方导入全局 CSS。
 */

// 导入全局css
import '../styles/global.css'
export default function App({Component, pageProps}){
    return(
        <Component {...pageProps} />
    );
}