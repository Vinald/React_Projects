function CertificateCard({ title, issuer, date, link }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card h-100 bg-secondary text-light border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-warning mb-3">{title}</h5>
                    <p className="card-text mb-4">Issued by {issuer} - {date}</p>
                    <a href={link} className="btn btn-outline-light btn-sm mt-auto" target="_blank" rel="noopener noreferrer">
                        View Certificate
                    </a>
                </div>
            </div>
        </div>
    );
}
export default CertificateCard;