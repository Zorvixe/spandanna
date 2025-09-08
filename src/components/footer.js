const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
      <div className="container-fluid footer position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="row g-5 py-5">
          <div className="col-lg-6 pe-lg-5">
            <a href="/" className="navbar-brand">
              <h1 className="display-5 text-primary">Photozone</h1>
            </a>
            <p>
              Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
              nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna
              erat dolore sed stet justo et dolor.
            </p>
            <p><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt me-2"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope me-2"></i>info@example.com</p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="col-lg-6 ps-lg-5">
            <div className="row g-5">
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Quick Links</h4>
                <a className="btn btn-link" href="/about_us">About Us</a>
                <a className="btn btn-link" href="/contact_us">Contact Us</a>
                <a className="btn btn-link" href="/services">Our Services</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Support</a>
              </div>
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Popular Links</h4>
                <a className="btn btn-link" href="/about_us">About Us</a>
                <a className="btn btn-link" href="/contact_us">Contact Us</a>
                <a className="btn btn-link" href="/services">Our Services</a>
                <a className="btn btn-link" href="#">Terms & Condition</a>
                <a className="btn btn-link" href="#">Support</a>
              </div>
              <div className="col-sm-12">
                <h4 className="text-light mb-4">Newsletter</h4>
                <div className="w-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-0 bg-secondary"
                      style={{ padding: "20px 30px" }}
                      placeholder="Your Email Address"
                    />
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid bg-dark text-white border-top border-secondary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="py-4 px-5 text-center text-md-start">
            <p className="mb-0">
              &copy; <a className="text-primary" href="/">Spandanna Photo Studio</a>. All Rights Reserved.
            </p>
          </div>
          <div className="py-4 px-5 bg-secondary footer-shape position-relative text-center text-md-end">
            {/* This template is free as long as you keep the footer author’s credit link. 
                If you'd like to use the template without the credit, 
                purchase the Credit Removal License at https://htmlcodex.com */}
            <p className="mb-0">
              Designed and Developed
            </p>  
            Maintained by <a href="https://zorvixetechnologies.com" target="_blank" rel="noreferrer">Zorvixe Technologies</a>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </div>
  );
};
export default Footer;
