import ProjectCard from "./ProjectCard";
import irrigation from "../../assets/images/irrigation.jpg";
import wheelchair from "../../assets/images/wheelchair.jpg";
import blog from "../../assets/images/blog.jpg";
import travel from "../../assets/images/trevallo.png";

function Projects() {
    const projectData = [
        {
            title: "Smart Irrigation System",
            image: irrigation,
            description: "Developed a smart irrigation system integrating IoT & ML.",
        },
        {
            title: "Wheelchair Tracker",
            image: wheelchair,
            description: "Created a wheelchair tracking system using GPS and IoT.",
        },
        {
            title: "Personal Blog",
            image: blog,
            description: "Developed a personal blog using React and Node.js.",
        },
        {
            title: "Travel Booking App",
            image: travel,
            description: "Built a travel booking application with user authentication.",
        },
    ];

    return (
        <section id="projects" className="mb-4">
            <h2 className="text-center mb-4 text-uppercase fw-bold">Projects</h2>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
