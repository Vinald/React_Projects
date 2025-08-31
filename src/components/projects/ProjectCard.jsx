import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";

function ProjectCard({ title, image, description }) {
    return (
        <div className="col">
            <div className="card bg-dark text-light h-100">
                <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                </div>
                <Button>Read More</Button>
            </div>
        </div>
    );
}
export default ProjectCard;
