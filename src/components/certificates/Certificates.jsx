import CertificateCard from "./CertificateCard";

function Certificates() {
    const certificates = [
        {
            title: "Python",
            issuer: "CISCO",
            date: "April 2025",
            link: "https://www.credly.com/badges/2dc786ff-1ccc-4d14-9221-229d41cd66f4/public_url",
        },
    ];

    return (
        <section id="certificates" className="py-5 bg-dark text-light">
            <div className="container">
                <h2 className="text-center mb-5 text-uppercase fw-bold">Certificates</h2>
                <div className="row g-4">
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={index}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            link={cert.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Certificates;