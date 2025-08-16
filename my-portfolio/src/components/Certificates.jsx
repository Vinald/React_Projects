function Certificates() {
    return (
        <section id="certificates" className="py-5 bg-dark text-light">
            <div className="container">
                <h2 className="text-center mb-5 text-uppercase fw-bold">Certificates</h2>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 bg-secondary text-light border-0 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-warning mb-3">Python</h5>
                                <p className="card-text mb-4">Issued by CISCO - April 2025</p>
                                <a
                                    href="https://www.credly.com/badges/2dc786ff-1ccc-4d14-9221-229d41cd66f4/public_url"
                                    className="btn btn-outline-light btn-sm mt-auto"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Add the other 7 certificate cards */}
                </div>
            </div>
        </section>
    );
}
export default Certificates;
