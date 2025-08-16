function Hero() {
    return (
        <section id="intro" className="bg-dark text-light py-5">
            <div className="container text-center py-2">
                <h4 className="fw-light mb-3 text-uppercase text-secondary">Hello, I'm</h4>
                <h1 className="display-3 fw-bold mb-3">Okiror Samuel Vinald</h1>
                <h3 className="fw-bold mb-3">
                    <span className="text-light">Computer Engineer</span>
                </h3>
                <a
                    href="assets/resume.pdf"
                    className="btn btn-warning btn-lg rounded-pill px-4 shadow-sm fw-bold"
                >
                    <i className="bi bi-download me-2"></i>Download Resume
                </a>
            </div>
        </section>
    );
}
export default Hero;
