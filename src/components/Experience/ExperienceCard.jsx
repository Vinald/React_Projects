function ExperienceCard({
    period,
    title,
    skills,
    responsibilities,
}) {
    return (
        <>
            <div className="mb-5">
                <span className="date text-warning d-block mb-2 fw-bold">{period}</span>
                <h4 className="fw-bold text-primary">{title}</h4>
                <p className="mt-2">
                    <strong>Skills:</strong> {skills.join(", ")}
                </p>
                <ul className="px-3">
                    {responsibilities.map((item, index) => (
                        <li key={index}>
                            {item.description}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default ExperienceCard;
