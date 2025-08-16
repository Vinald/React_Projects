function Skills() {
    return (
        <section id="skills" className="mb-5 py-5 bg-dark text-light">
            <div className="container">
                <h2 className="text-center mb-5 text-uppercase fw-bold">Skills</h2>

                {/* Technical Skills */}
                <h4 className="mb-4 text-warning fw-bold">Technical Skills</h4>
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card h-100 bg-secondary">
                            <div className="card-body">
                                <h5 className="card-title text-warning fw-bold">
                                    <i className="fas fa-code me-2"></i>Programming Languages
                                </h5>
                                <div className="d-flex flex-wrap gap-2 mt-3 lead">
                                    <span className="badge bg-warning text-dark">Python</span>
                                    <span className="badge bg-warning text-dark">Java</span>
                                    <span className="badge bg-warning text-dark">Kotlin</span>
                                    <span className="badge bg-warning text-dark">JavaScript</span>
                                    <span className="badge bg-warning text-dark">TypeScript</span>
                                    <span className="badge bg-warning text-dark">PHP</span>
                                    <span className="badge bg-warning text-dark">SQL</span>
                                    <span className="badge bg-warning text-dark">HTML/CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add more skill columns like in your HTML */}
                </div>

                {/* Soft Skills */}
                <h4 className="mt-5 text-warning fw-bold">Soft Skills</h4>
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="card h-100 bg-secondary">
                            <div className="card-body">
                                <h5 className="card-title text-warning fw-bold">Core Skills</h5>
                                <div className="d-flex flex-wrap gap-2 mt-3 lead">
                                    <span className="badge bg-warning text-dark">
                                        Problem-Solving
                                    </span>
                                    <span className="badge bg-warning text-dark">Teamwork</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add remaining soft skill cards */}
                </div>
            </div>
        </section>
    );
}
export default Skills;
