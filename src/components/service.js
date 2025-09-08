import { useEffect } from "react";
const Service = () => {
     useEffect(() => {
            document.title = "Service| Spandanna Photography"
        })
    
    return (
        <div>
            {/* !-- Header Start --> */}
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Our Services</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Our Services</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid bg-white p-3 w-100" src="img/hero-1.jpg" alt="" />
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid bg-white p-3 w-100" src="img/hero-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}


            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <p className="text-primary text-uppercase mb-2">Our Services</p>
                        <h1 className="display-6 mb-4">We Provide Best Professional Services</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column bg-light p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-1.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Weddings</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex flex-column bg-light p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-2.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Portraits</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex flex-column bg-light p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-3.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Fashion</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item d-flex flex-column bg-light p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-4.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Editorial</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


        </div>
    );
};
export default Service;