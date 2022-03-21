//api 路由
// 可以这样访问试试 http://localhost:3000/api/hello
//服务端接口
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
}