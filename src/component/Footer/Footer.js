import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
                    </section>
                    <section className>
                        <form action>
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example21">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <div className="row">
                            <div className="col-8">
                                <h5>NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h5>
                                <p>E-learning sẽ gởi các khóa học trực tuyến & các chương trình E-learning hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-success">Tư vấn và đăng ký khoá học</button>
                            </div>
                        </div>
                    </section>
                    <section className="text-center">
                        <div className="row">
                            <div className=" col-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Đà Nẵng</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">103 Nguyễn Hữu Dật, Hải Châu</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" col-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Hồ Chí Minh</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Trụ sở: 112 Cao Thắng, Quận 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">459 Sư Vạn Hạnh, Quận 10</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">82 Ung Văn Khiêm, Bình Thạnh</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>

        </>
    )
}
