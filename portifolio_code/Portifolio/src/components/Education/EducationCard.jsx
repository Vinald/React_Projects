import React from "react";

const EducationCard = ({ education }) => (
    <div className="timeline-item">
        <span className="date text-warning font-weight-bold">{education.date}</span>
        <h4>{education.degree}</h4>
        <p>{education.school}</p>
    </div>
);

export default EducationCard;
