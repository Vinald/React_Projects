function Contact() {
    return (
        <div className="container mt-5">
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-3">
                    <a
                        href="mailto:okiror1vinald@gmail.com"
                        className="text-warning text-decoration-none"
                    >
                        <div className="card bg-dark h-100 border-0 shadow-sm text-center p-4">
                            <i className="bi bi-envelope-fill icon-lg text-warning mb-3"></i>
                            <h5 className="text-light mb-2">Email</h5>
                            okiror1vinald@gmail.com
                        </div>
                    </a>
                </div>

                {/* GitHub, LinkedIn, Phone in same pattern */}
            </div>
        </div>
    );
}
export default Contact;
