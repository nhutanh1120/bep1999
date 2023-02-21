import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="App">
            <section className="page-404">
                <div className="grid wide">
                    <div className="col l-10 c-12 m-12 mx-auto">
                        <div className="four-zero-four">
                            <h1 className="text-center ">404</h1>
                        </div>

                        <div className="constant-404">
                            <h3 className="h2">Trang không tồn tại</h3>
                            <p>Chúng tôi không tìm thấy trang bạn đang tìm.</p>

                            <Link to="/" className="link-404">
                                Về trang chủ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;
