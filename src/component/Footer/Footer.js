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
                                <h5>NH???N TIN S??? KI???N & KHUY???N M??I</h5>
                                <p>E-learning s??? g???i c??c kh??a h???c tr???c tuy???n & c??c ch????ng tr??nh E-learning ho??n to??n MI???N PH?? v?? c??c ch????ng tr??nh KHUY???N M??I h???p d???n ?????n c??c b???n.</p>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-success">T?? v???n v?? ????ng k?? kho?? h???c</button>
                            </div>
                        </div>
                    </section>
                    <section className="text-center">
                        <div className="row">
                            <div className=" col-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">???? N???ng</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">103 Nguy???n H???u D???t, H???i Ch??u</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" col-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">H??? Ch?? Minh</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Tr??? s???: 112 Cao Th???ng, Qu???n 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">459 S?? V???n H???nh, Qu???n 10</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">82 Ung V??n Khi??m, B??nh Th???nh</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    ?? 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>

        </>
    )
}
