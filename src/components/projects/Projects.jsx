import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="projects" className="mb-4">
            <h2 className="text-center mb-4 text-uppercase fw-bold">Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <ProjectCard
                    title="Smart Irrigation System"
                    image="../../assets/images/irrigation.jpg"
                    description="Developed a smart irrigation system integrating IoT & ML."
                />
                <ProjectCard
                    title="Wheelchair Tracker"
                    image="assets/images/wheelchair.jpg"
                    description="Created a wheelchair tracking system using GPS and IoT."
                />
                <ProjectCard
                    title="Personal Blog"
                    image="assets/images/blog.jpg"
                    description="Developed a personal blog using React and Node.js."
                />
                <ProjectCard
                    title="Travel Booking App"
                    image="assets/images/travello.jpg"
                    description="Built a travel booking application with user authentication."
                />
            </div>
        </section>
    );
}
export default Projects;
