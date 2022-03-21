//自定义404页面
export default function My404() {
   
    return (
        <div>
            <h1 className="notFound">
                404 - Page Not Found
            </h1>
        <style jsx>
            {`
                .notFound{
                    color: red ;
                    text-align:center;
                }
            `}
        </style>
        </div>

    );
}