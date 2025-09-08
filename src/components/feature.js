const Feature = () => {
    return (
        <div>
            {/* <!-- Header Start --> */}
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Features</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Features</li>
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


            {/* <!-- Facts Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <p className="text-primary text-uppercase mb-2">Why Choose Us!</p>
                        <h1 className="display-6 mb-5">The Leading Photo Studio In The Country</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item bg-light text-center h-100 p-5">
                                <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">35</h1>
                                <h4 className="mb-3">Award Winning</h4>
                                <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item bg-light text-center h-100 p-5">
                                <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">45</h1>
                                <h4 className="mb-3">Years Experience</h4>
                                <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item bg-light text-center h-100 p-5">
                                <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">12345</h1>
                                <h4 className="mb-3">Happy Clients</h4>
                                <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts End --> */}
        </div>
    );
};
export default Feature;