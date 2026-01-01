import React from "react";

const ContactCards = () => (
    <div className="container mt-5">
        <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-3">
                <a
                    href="mailto:okiror1vinald@gmail.com"
                    className="text-warning text-decoration-none"
                >
                    <div className="card bg-dark h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="icon-lg bg-warning-soft text-warning rounded-circle mb-3 mx-auto">
                                <i className="bi bi-envelope-fill"></i>
                            </div>
                            <h5 className="text-light mb-2">Email</h5>
                            okiror1vinald@gmail.com
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-6 col-lg-3">
                <a
                    href="https://github.com/vinald"
                    className="text-warning text-decoration-none"
                    target="_blank"
                    rel="noopener"
                >
                    <div className="card bg-dark h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="icon-lg bg-warning-soft text-warning rounded-circle mb-3 mx-auto">
                                <i className="bi bi-github"></i>
                            </div>
                            <h5 className="text-light mb-2">GitHub</h5>
                            Vinald
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-6 col-lg-3">
                <a
                    href="https://linkedin.com/in/vinald12"
                    className="text-warning text-decoration-none"
                    target="_blank"
                    rel="noopener"
                >
                    <div className="card bg-dark h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="icon-lg bg-warning-soft text-warning rounded-circle mb-3 mx-auto">
                                <i className="bi bi-linkedin"></i>
                            </div>
                            <h5 className="text-light mb-2">LinkedIn</h5>
                            Okiror Samuel Vinald
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card bg-dark h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                        <div className="icon-lg bg-warning-soft text-warning rounded-circle mb-3 mx-auto">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <h5 className="text-light mb-2">Phone</h5>
                        <span className="text-warning">+256 746 178 844</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ContactCards;
