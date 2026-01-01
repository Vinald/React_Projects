const Hero = () => (
    <section id="intro" className="bg-dark text-light py-5">
        <div className="container text-center py-2">
            <h4 className="fw-light mb-3 text-uppercase text-secondary tracking-wider">
                Hello, I'm
            </h4>
            <h1 className="display-3 fw-bold mb-3 text-gradient-primary">
                <span className="d-block">Okiror Samuel Vinald</span>
            </h1>
            <div className="mb-4">
                <h3 className="d-inline-block position-relative fw-bold mb-3 title-underline">
                    <span className="text-light">Computer Engineer</span>
                </h3>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                <a
                    href="assets/okiror_samuel_vinald.pdf"
                    className="btn btn-warning btn-lg rounded-pill px-4 shadow-sm fw-bold"
                >
                    <i className="bi bi-download me-2"></i>Download Resume
                </a>
            </div>
        </div>
        <div className="row align-items-center justify-content-center pt-5">
            <div className="col-lg-5 text-center mb-4 mb-md-0">
                <img
                    src="assets/images/profile_new_1.jpg"
                    alt="Vinald"
                    className="img-fluid rounded-5 shadow-lg"
                    style={{ maxWidth: "300px", border: "5px solid black" }}
                />
            </div>
            <div className="col-lg-7 text-light">
                <p className="lead my-4 text-light">
                    I'm a Results-driven <strong>Software Developer</strong> with a Bachelor of
                    Science in Computer Engineering, specializing in full-stack web and mobile
                    development. With professional expertise in
                    <strong>JavaScript</strong> (React and React Native),
                    <strong>Python</strong> (Django), and <strong>Java</strong>, with hands-on
                    experience building scalable, user-centric applications.
                </p>
                <p className="mb-4">
                    Since transitioning from academia to professional development, I've focused on
                    bridging the gap between theoretical knowledge and practical implementation. My
                    engineering background gives me a unique perspective on system design, while my
                    hands-on experience allows me to create efficient, scalable applications that
                    solve real business problems.
                </p>
                <p className="mb-4">
                    What drives me is the opportunity to transform complex requirements into
                    intuitive digital experiences. Whether optimizing backend performance or
                    crafting pixel-perfect UIs, I approach each challenge with a problem-solving
                    mindset and commitment to clean, maintainable code.
                </p>
                <h5 className="text-warning mb-3">
                    Software Development | Machine Learning & AI | Cyber Security Enthusiast |
                    Continuous Learner
                </h5>
            </div>
        </div>
    </section>
);

export default Hero;
