const Footer = () => (
    <footer className="bg-dark text-light text-center py-2">
        <p>
            &copy; <span id="currentYear">{new Date().getFullYear()}</span> Okiror Samuel Vinald
        </p>
    </footer>
);

export default Footer;
