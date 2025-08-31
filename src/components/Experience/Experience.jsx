import ExperienceCard from "./ExperienceCard";

function Experience() {
    const experiences = [
        {
            period: "January 2025 - Present",
            title: "Software Developer, Infectious Disease Institute",
            skills: ["Agile", "Kotlin", "Docker", "OpenMRS"],
            responsibilities: [
                "Collaborated with teams to develop and maintain mobile healthcare apps.",
                "Participated in Agile processes (sprints, stand-ups).",
                "Enhanced OpenMRS functionality.",
                "Reviewed code and mentored peers.",
            ],
        },
    ];
    return (
        <section id="experience" className="py-5 bg-dark text-light">
            <div className="container">
                <h2 className="text-center mb-5 text-uppercase fw-bold">Experience</h2>
                <div>
                    <ExperienceCard
                        period={experiences[0].period}
                        title={experiences[0].title}
                        skills={experiences[0].skills}
                        responsibilities={experiences[0].responsibilities}
                    />
                </div>
            </div>
        </section>
    );
}
export default Experience;
