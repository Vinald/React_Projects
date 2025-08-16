function Projects() {
    return (
        <section id="projects" className="mb-4">
            <h2 className="text-center mb-4 text-uppercase fw-bold">Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card bg-dark text-light h-100">
                        <img
                            src="assets/images/irrigation.jpg"
                            className="card-img-top"
                            alt="Smart Irrigation"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h3 className="card-title">Smart Irrigation System</h3>
                            <p className="card-text">
                                Developed a smart irrigation system integrating IoT & ML.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Add other project cards like wheelchair, blog, travello */}
            </div>
        </section>
    );
}
export default Projects;
