function Experience() {
    return (
        <section id="experience" className="py-5 bg-dark text-light">
            <div className="container">
                <h2 className="text-center mb-5 text-uppercase fw-bold">Experience</h2>
                <div>
                    {/* Experience Item */}
                    <div className="mb-5">
                        <span className="date text-warning d-block mb-2 fw-bold">
                            January 2025 - Present
                        </span>
                        <h4 className="fw-bold text-primary">
                            Software Developer, Infectious Disease Institute
                        </h4>
                        <p className="mt-2">
                            <strong>Skills:</strong> Agile, Kotlin, Docker, OpenMRS
                        </p>
                        <ul className="px-3">
                            <li>
                                Collaborated with teams to develop and maintain mobile healthcare
                                apps.
                            </li>
                            <li>Participated in Agile processes (sprints, stand-ups).</li>
                            <li>Enhanced OpenMRS functionality.</li>
                            <li>Reviewed code and mentored peers.</li>
                        </ul>
                    </div>

                    {/* Add remaining experiences in the same structure... */}
                </div>
            </div>
        </section>
    );
}
export default Experience;
