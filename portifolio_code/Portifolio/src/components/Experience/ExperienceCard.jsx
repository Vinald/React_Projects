import React from "react";

const ExperienceCard = ({ experience }) => (
    <div className="mb-5">
        <span className="date text-warning d-block mb-2 fw-bold">{experience.date}</span>
        <h4 className="fw-bold text-primary">{experience.title}</h4>
        <p className="mt-2">
            <strong>Skills:</strong> {experience.skills}
        </p>
        <p>
            <strong>Responsibilities:</strong>
        </p>
        <ul className="px-3">
            {experience.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
);

export default ExperienceCard;
